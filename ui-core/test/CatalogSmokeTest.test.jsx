import { describe, it, expect } from 'vitest';
import { ALL_COMPONENTS } from '../config/content';

describe('Smoke test — estructura del registro', () => {
  it('todos los entries tienen campos requeridos', () => {
    ALL_COMPONENTS.forEach(entry => {
      expect(entry.name, `${entry.name}: falta name`).toBeTruthy();
      expect(entry.componentName, `${entry.name}: falta componentName`).toBeTruthy();
      expect(entry.componentPath, `${entry.name}: falta componentPath`).toBeTruthy();
      expect(entry.propsName, `${entry.name}: falta propsName`).toBeTruthy();
      expect(entry.propsPath, `${entry.name}: falta propsPath`).toBeTruthy();
      expect(entry.category, `${entry.name}: falta category`).toBeTruthy();
      expect(entry.state, `${entry.name}: falta state`).toBeTruthy();
      expect(Array.isArray(entry.useIn), `${entry.name}: useIn debe ser array`).toBe(true);
      expect(entry.useIn.length, `${entry.name}: useIn vacío`).toBeGreaterThan(0);
      expect(typeof entry.loader, `${entry.name}: loader debe ser función`).toBe('function');
    });
  });

  it('no hay nombres duplicados dentro del mismo proyecto', () => {
    const seen = new Set();
    ALL_COMPONENTS.forEach(entry => {
      entry.useIn.forEach(project => {
        const key = `${project}::${entry.name}`;
        expect(seen.has(key), `Duplicado encontrado: ${key}`).toBe(false);
        seen.add(key);
      });
    });
  });
});
