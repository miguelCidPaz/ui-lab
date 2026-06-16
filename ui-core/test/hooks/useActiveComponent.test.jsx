import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useActiveComponent } from '../../utils/hooks/useActiveComponent';

const MOCK_COMPONENTS = [
    { name: 'Boton Sumar', category: 'Componentes', useIn: ['ProyectoA'] },
    { name: 'Panel Info', category: 'Modulos', useIn: ['ProyectoA'] },
];

describe('useActiveComponent', () => {
    beforeEach(() => {
        window.history.pushState({}, '', '/');
    });

    it('returns null component and false isDetailPath at root', () => {
        const { result } = renderHook(() => useActiveComponent(MOCK_COMPONENTS));
        expect(result.current.componentData).toBeNull();
        expect(result.current.isDetailPath).toBe(false);
    });

    it('returns null component and false isDetailPath for category-only path', () => {
        window.history.pushState({}, '', '/componentes');
        const { result } = renderHook(() => useActiveComponent(MOCK_COMPONENTS));
        expect(result.current.componentData).toBeNull();
        expect(result.current.isDetailPath).toBe(false);
    });

    it('resolves component and sets isDetailPath=true from URL on mount (lazy init)', () => {
        window.history.pushState({}, '', '/Componentes/Boton%20Sumar|ProyectoA');
        const { result } = renderHook(() => useActiveComponent(MOCK_COMPONENTS));
        expect(result.current.componentData).toBe(MOCK_COMPONENTS[0]);
        expect(result.current.isDetailPath).toBe(true);
    });

    it('sets isDetailPath=true with unknown component (404 case)', () => {
        window.history.pushState({}, '', '/Componentes/NoExiste|ProyectoFalso');
        const { result } = renderHook(() => useActiveComponent(MOCK_COMPONENTS));
        expect(result.current.componentData).toBeNull();
        expect(result.current.isDetailPath).toBe(true);
    });

    it('updates component data on popstate', () => {
        const { result } = renderHook(() => useActiveComponent(MOCK_COMPONENTS));
        act(() => {
            window.history.pushState({}, '', '/Componentes/Boton%20Sumar|ProyectoA');
            window.dispatchEvent(new PopStateEvent('popstate'));
        });
        expect(result.current.componentData).toBe(MOCK_COMPONENTS[0]);
        expect(result.current.isDetailPath).toBe(true);
    });

    it('returns null component when navigating back to category root', () => {
        window.history.pushState({}, '', '/Componentes/Boton%20Sumar|ProyectoA');
        const { result } = renderHook(() => useActiveComponent(MOCK_COMPONENTS));
        act(() => {
            window.history.pushState({}, '', '/componentes');
            window.dispatchEvent(new PopStateEvent('popstate'));
        });
        expect(result.current.componentData).toBeNull();
        expect(result.current.isDetailPath).toBe(false);
    });

    it('resolves different component after navigation', () => {
        const { result } = renderHook(() => useActiveComponent(MOCK_COMPONENTS));
        act(() => {
            window.history.pushState({}, '', '/Modulos/Panel%20Info|ProyectoA');
            window.dispatchEvent(new PopStateEvent('popstate'));
        });
        expect(result.current.componentData).toBe(MOCK_COMPONENTS[1]);
        expect(result.current.isDetailPath).toBe(true);
    });
});
