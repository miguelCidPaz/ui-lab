import { describe, it, expect, beforeEach } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useCatalogRouting } from '../../utils/hooks/useCatalogRouting';

const CATEGORIES = { components: 'Componentes', modules: 'Modulos', pages: 'Paginas' };

describe('useCatalogRouting', () => {
    beforeEach(() => {
        window.history.pushState({}, '', '/');
    });

    it('defaults to components category when path is root', () => {
        const { result } = renderHook(() => useCatalogRouting(CATEGORIES));
        expect(result.current[0]).toBe('Componentes');
    });

    it('initializes from URL path on mount', () => {
        window.history.pushState({}, '', '/modulos');
        const { result } = renderHook(() => useCatalogRouting(CATEGORIES));
        expect(result.current[0]).toBe('Modulos');
    });

    it('updates on popstate event', () => {
        const { result } = renderHook(() => useCatalogRouting(CATEGORIES));
        act(() => {
            window.history.pushState({}, '', '/paginas');
            window.dispatchEvent(new PopStateEvent('popstate'));
        });
        expect(result.current[0]).toBe('Paginas');
    });

    it('ignores popstate with unrecognized path', () => {
        window.history.pushState({}, '', '/componentes');
        const { result } = renderHook(() => useCatalogRouting(CATEGORIES));
        act(() => {
            window.history.pushState({}, '', '/unknown-path');
            window.dispatchEvent(new PopStateEvent('popstate'));
        });
        // stays on last known valid category
        expect(result.current[0]).toBe('Componentes');
    });

    it('setCatalogo updates category directly', () => {
        const { result } = renderHook(() => useCatalogRouting(CATEGORIES));
        act(() => {
            result.current[1]('Modulos');
        });
        expect(result.current[0]).toBe('Modulos');
    });

    it('restores original pushState on unmount', () => {
        const originalPushState = window.history.pushState;
        const { unmount } = renderHook(() => useCatalogRouting(CATEGORIES));
        unmount();
        expect(window.history.pushState).toBe(originalPushState);
    });
});
