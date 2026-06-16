import { describe, it, expect, beforeEach } from 'vitest';
import { applyBaseColors } from '../../theme/applyBaseColors';

describe('applyBaseColors', () => {
    beforeEach(() => {
        document.documentElement.removeAttribute('style');
    });

    it('sets CSS custom properties on :root', () => {
        applyBaseColors({ ui_test_color: '#ff0000' });
        expect(document.documentElement.style.getPropertyValue('--ui-test-color')).toBe('#ff0000');
    });

    it('converts underscores to hyphens in CSS var name', () => {
        applyBaseColors({ ui_catalog_base_color: '#0f172a' });
        expect(document.documentElement.style.getPropertyValue('--ui-catalog-base-color')).toBe('#0f172a');
    });

    it('sets multiple properties at once', () => {
        applyBaseColors({ color_a: '#111', color_b: '#222' });
        expect(document.documentElement.style.getPropertyValue('--color-a')).toBe('#111');
        expect(document.documentElement.style.getPropertyValue('--color-b')).toBe('#222');
    });

    it('does nothing when given empty object', () => {
        const before = document.documentElement.getAttribute('style');
        applyBaseColors({});
        const after = document.documentElement.getAttribute('style');
        expect(before).toBe(after);
    });
});
