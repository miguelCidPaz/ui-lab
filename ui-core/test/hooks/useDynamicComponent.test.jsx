import { describe, it, expect } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { useDynamicComponent } from '../../utils/hooks/useDynamicComponent';

describe('useDynamicComponent', () => {
    it('returns all nulls when componentData is null', () => {
        const { result } = renderHook(() => useDynamicComponent(null));
        expect(result.current.LoadedComponent).toBeNull();
        expect(result.current.LoadedProps).toBeNull();
        expect(result.current.loadError).toBeNull();
    });

    it('sets loadError when component path does not exist', async () => {
        const fakeData = {
            componentName: 'FakeComp',
            componentPath: '/__nonexistent_component__.jsx',
            propsName: 'fakeProps',
            propsPath: '/__nonexistent_props__.js',
        };
        const { result } = renderHook(() => useDynamicComponent(fakeData));
        await waitFor(() => {
            expect(result.current.loadError).toBeTruthy();
        });
        expect(result.current.LoadedComponent).toBeNull();
    });

    it('sets loadError when named export is missing', async () => {
        const fakeData = {
            componentName: 'NonExistentExport',
            componentPath: '/Proyectos/ProyectoEjemplo2/utils/props.js',
            propsName: 'propsButtonMasSolitario',
            propsPath: '/Proyectos/ProyectoEjemplo2/utils/props.js',
        };
        const { result } = renderHook(() => useDynamicComponent(fakeData));
        await waitFor(() => {
            expect(result.current.loadError).toBeTruthy();
        });
    });

    it('returns null when componentData is undefined', () => {
        const { result } = renderHook(() => useDynamicComponent(undefined));
        expect(result.current.LoadedComponent).toBeNull();
        expect(result.current.LoadedProps).toBeNull();
        expect(result.current.loadError).toBeNull();
    });
});
