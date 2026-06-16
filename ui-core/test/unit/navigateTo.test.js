import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { navigateTo } from '../../utils/navigate';

describe('navigateTo', () => {
    let pushStateSpy;
    let dispatchEventSpy;

    beforeEach(() => {
        pushStateSpy = vi.spyOn(window.history, 'pushState').mockImplementation(() => {});
        dispatchEventSpy = vi.spyOn(window, 'dispatchEvent').mockImplementation(() => true);
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    it('navigates to valid category', () => {
        navigateTo('/Componentes');
        expect(pushStateSpy).toHaveBeenCalledWith({}, '', '/componentes');
    });

    it('lowercases category in URL', () => {
        navigateTo('/MODULOS');
        expect(pushStateSpy).toHaveBeenCalledWith({}, '', '/modulos');
    });

    it('dispatches popstate event after pushState', () => {
        navigateTo('/Componentes');
        expect(dispatchEventSpy).toHaveBeenCalled();
    });

    it('preserves subpath in URL', () => {
        navigateTo('/Componentes/Boton%20Sumar|ProyectoA');
        expect(pushStateSpy).toHaveBeenCalledWith({}, '', '/componentes/Boton%20Sumar|ProyectoA');
    });

    it('warns and does not navigate for invalid category', () => {
        const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
        navigateTo('/InvalidCategory');
        expect(pushStateSpy).not.toHaveBeenCalled();
        expect(warnSpy).toHaveBeenCalled();
        warnSpy.mockRestore();
    });

    it('accepts path without leading slash', () => {
        navigateTo('Componentes');
        expect(pushStateSpy).toHaveBeenCalledWith({}, '', '/componentes');
    });

    it('navigates to Paginas category', () => {
        navigateTo('/Paginas');
        expect(pushStateSpy).toHaveBeenCalledWith({}, '', '/paginas');
    });
});
