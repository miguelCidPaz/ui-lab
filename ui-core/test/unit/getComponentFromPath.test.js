import { describe, it, expect } from 'vitest';
import { getComponentFromPath } from '../../utils/getComponentFromPath';

const COMPS = [
    { name: 'Boton Sumar', category: 'Componentes', useIn: ['ProyectoA'], slug: undefined },
    { name: 'Panel Info', category: 'Modulos', useIn: ['ProyectoA', 'ProyectoB'] },
    { name: 'Mi Pagina', category: 'Paginas', useIn: ['ProyectoB'], slug: 'mi-pagina' },
];

describe('getComponentFromPath', () => {
    it('finds component by name and project', () => {
        const result = getComponentFromPath('/Componentes/Boton%20Sumar|ProyectoA', COMPS);
        expect(result).toBe(COMPS[0]);
    });

    it('match is case-insensitive on category', () => {
        const result = getComponentFromPath('/componentes/Boton%20Sumar|ProyectoA', COMPS);
        expect(result).toBe(COMPS[0]);
    });

    it('match is case-insensitive on name', () => {
        const result = getComponentFromPath('/Componentes/boton%20sumar|ProyectoA', COMPS);
        expect(result).toBe(COMPS[0]);
    });

    it('finds component by slug when defined', () => {
        const result = getComponentFromPath('/Paginas/mi-pagina|ProyectoB', COMPS);
        expect(result).toBe(COMPS[2]);
    });

    it('returns null for wrong project', () => {
        const result = getComponentFromPath('/Componentes/Boton%20Sumar|ProyectoB', COMPS);
        expect(result).toBeNull();
    });

    it('returns null for wrong category', () => {
        const result = getComponentFromPath('/Paginas/Boton%20Sumar|ProyectoA', COMPS);
        expect(result).toBeNull();
    });

    it('returns null when no component slug in path', () => {
        const result = getComponentFromPath('/componentes', COMPS);
        expect(result).toBeNull();
    });

    it('returns null for empty path', () => {
        const result = getComponentFromPath('/', COMPS);
        expect(result).toBeNull();
    });

    it('finds multi-project component by any valid project', () => {
        const resultA = getComponentFromPath('/Modulos/Panel%20Info|ProyectoA', COMPS);
        const resultB = getComponentFromPath('/Modulos/Panel%20Info|ProyectoB', COMPS);
        expect(resultA).toBe(COMPS[1]);
        expect(resultB).toBe(COMPS[1]);
    });

    it('returns null when pipe separator absent (no project in URL)', () => {
        const result = getComponentFromPath('/Componentes/BotonSumar', COMPS);
        expect(result).toBeNull();
    });
});
