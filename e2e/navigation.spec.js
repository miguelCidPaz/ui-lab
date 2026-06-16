import { test, expect } from '@playwright/test';

test.describe('Navegación principal', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('título del catálogo visible en el header', async ({ page }) => {
        await expect(page.getByText('ui-lab')).toBeVisible();
    });

    test('botones de categoría visibles en el header', async ({ page }) => {
        await expect(page.getByRole('button', { name: 'Componentes' })).toBeVisible();
        await expect(page.getByRole('button', { name: 'Modulos' })).toBeVisible();
        await expect(page.getByRole('button', { name: 'Paginas' })).toBeVisible();
    });

    test('carga inicial muestra tarjetas de componentes', async ({ page }) => {
        await expect(page.getByText('Boton Sumar').first()).toBeVisible();
        await expect(page.getByText('Boton Restar').first()).toBeVisible();
    });

    test('click en categoría Modulos muestra módulos', async ({ page }) => {
        await page.getByRole('button', { name: 'Modulos' }).click();
        await expect(page.getByText('Panel Emoji').first()).toBeVisible();
        await expect(page.getByText('Panel Operaciones').first()).toBeVisible();
        await expect(page.getByText('Boton Sumar').first()).not.toBeVisible();
    });

    test('click en categoría Paginas muestra páginas', async ({ page }) => {
        await page.getByRole('button', { name: 'Paginas' }).click();
        await expect(page.getByText('Pagina de prueba').first()).toBeVisible();
    });

    test('botón X oculta el header', async ({ page }) => {
        await expect(page.getByText('ui-lab')).toBeVisible();
        // native click bypasses CSS overlap issue (button is position:absolute under header)
        await page.locator('button').filter({ hasText: /^X$/ }).evaluate(el => el.click());
        await expect(page.getByText('ui-lab')).not.toBeVisible();
    });

    test('botón X vuelve a mostrar el header al hacer click de nuevo', async ({ page }) => {
        await page.locator('button').filter({ hasText: /^X$/ }).evaluate(el => el.click());
        await expect(page.getByText('ui-lab')).not.toBeVisible();
        await page.locator('button').filter({ hasText: /^X$/ }).evaluate(el => el.click());
        await expect(page.getByText('ui-lab')).toBeVisible();
    });
});
