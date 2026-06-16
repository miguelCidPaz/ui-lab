/**
 * @vitest-environment node
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';

const mockFs = {
    existsSync: vi.fn(),
    mkdirSync: vi.fn(),
    writeFileSync: vi.fn(),
};

vi.mock('fs', () => ({ default: mockFs }));

vi.mock('../../config/content.js', () => ({
    COMPONENT_REGISTRY: [
        {
            name: 'Test Button',
            componentName: 'TestButton',
            componentPath: '/Proyectos/TestProject/components/TestButton/index.jsx',
            propsName: 'testProps',
            propsPath: '/Proyectos/TestProject/utils/props.js',
            category: 'Componentes',
            state: { label: 'Finalizado', color: '#43a047' },
            endpoint: '-',
            methodHttp: '-',
            useIn: ['TestProject'],
        },
        {
            name: 'Shared Panel',
            componentName: 'SharedPanel',
            componentPath: '/Proyectos/TestProject/components/SharedPanel/index.jsx',
            propsName: 'sharedProps',
            propsPath: '/Proyectos/TestProject/utils/props.js',
            category: 'Componentes',
            state: { label: 'En revisión', color: '#fb8c00' },
            endpoint: '-',
            methodHttp: '-',
            useIn: ['TestProject', 'OtherProject'],
        },
    ],
    ALL_COMPONENTS: [],
}));

describe('syncComponents', () => {
    beforeEach(() => {
        vi.clearAllMocks();
        mockFs.existsSync.mockReturnValue(true);
        mockFs.mkdirSync.mockImplementation(() => {});
        mockFs.writeFileSync.mockImplementation(() => {});
    });

    it('writes components.json for each unique project', async () => {
        const { syncComponents } = await import('../../server/scripts/syncComponents.js');
        syncComponents();
        // TestProject + OtherProject → 2 writes
        expect(mockFs.writeFileSync).toHaveBeenCalledTimes(2);
    });

    it('file path includes project name and components.json', async () => {
        const { syncComponents } = await import('../../server/scripts/syncComponents.js');
        syncComponents();
        const paths = mockFs.writeFileSync.mock.calls.map(([p]) => p);
        expect(paths.some(p => p.includes('TestProject') && p.endsWith('components.json'))).toBe(true);
        expect(paths.some(p => p.includes('OtherProject') && p.endsWith('components.json'))).toBe(true);
    });

    it('written JSON contains only components for that project', async () => {
        const { syncComponents } = await import('../../server/scripts/syncComponents.js');
        syncComponents();
        const testProjectCall = mockFs.writeFileSync.mock.calls.find(([p]) => p.includes('TestProject'));
        const parsed = JSON.parse(testProjectCall[1]);
        expect(parsed.length).toBe(2); // both components are in TestProject
        expect(parsed[0].name).toBe('Test Button');
    });

    it('checks project directory exists before writing', async () => {
        const { syncComponents } = await import('../../server/scripts/syncComponents.js');
        syncComponents();
        expect(mockFs.existsSync).toHaveBeenCalledTimes(2);
        expect(mockFs.writeFileSync).toHaveBeenCalledTimes(2);
    });

    it('skips writing when project directory does not exist', async () => {
        mockFs.existsSync.mockReturnValue(false);
        const { syncComponents } = await import('../../server/scripts/syncComponents.js');
        syncComponents();
        expect(mockFs.writeFileSync).not.toHaveBeenCalled();
    });

    it('resolves state to string label', async () => {
        const { syncComponents } = await import('../../server/scripts/syncComponents.js');
        syncComponents();
        const call = mockFs.writeFileSync.mock.calls.find(([p]) => p.includes('TestProject'));
        const parsed = JSON.parse(call[1]);
        expect(parsed[0].state).toBe('Finalizado');
        expect(parsed[0].stateColor).toBe('#43a047');
    });
});
