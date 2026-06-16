import { test, expect } from '@playwright/test';

test.describe('Vista detalle de componente', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('click en "Ir a elemento" abre vista detalle', async ({ page }) => {
        await page.getByRole('button', { name: 'Ir a elemento' }).first().click();
        await expect(page).toHaveURL(/\/componentes\//);
    });

    test('vista detalle muestra el componente cargado', async ({ page }) => {
        await page.getByRole('button', { name: 'Ir a elemento' }).first().click();
        await expect(page.getByText('Cargando componente y props...')).not.toBeVisible({ timeout: 5000 });
    });

    test('vista detalle muestra panel de información', async ({ page }) => {
        await page.getByRole('button', { name: 'Ir a elemento' }).first().click();
        await expect(page.getByText('Nombre:')).toBeVisible({ timeout: 5000 });
        await expect(page.getByText('Usado en:')).toBeVisible();
    });

    test('botón ← vuelve al listado', async ({ page }) => {
        await page.getByRole('button', { name: 'Ir a elemento' }).first().click();
        await expect(page).toHaveURL(/\/componentes\//);
        // native click bypasses CSS overlap issue
        await page.locator('button').filter({ hasText: /^←$/ }).evaluate(el => el.click());
        await expect(page).toHaveURL(/\/componentes$/);
        await expect(page.getByText('Boton Sumar')).toBeVisible();
    });

    test('acceso directo por URL funciona', async ({ page }) => {
        await page.goto('/componentes/Boton%20Sumar|ProyectoEjemplo2');
        await expect(page.getByText('Nombre:')).toBeVisible({ timeout: 5000 });
    });

    test('URL inválida muestra estado 404', async ({ page }) => {
        await page.goto('/componentes/ComponenteQueNoExiste|ProyectoFalso');
        await expect(page.getByText('404')).toBeVisible({ timeout: 3000 });
        await expect(page.getByText('Componente no encontrado')).toBeVisible();
    });
});
