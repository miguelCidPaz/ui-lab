import { test, expect } from '@playwright/test';

test.describe('Filtrado por proyecto', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('selector de proyecto visible', async ({ page }) => {
        await expect(page.getByRole('combobox')).toBeVisible();
    });

    test('opción por defecto es "Todos los componentes"', async ({ page }) => {
        const select = page.getByRole('combobox');
        await expect(select).toHaveValue('null');
    });

    test('seleccionar proyecto filtra la lista', async ({ page }) => {
        await page.getByRole('combobox').selectOption('ProyectoEjemplo2');
        await expect(page.getByText('Boton Sumar').first()).toBeVisible();
        await expect(page.getByText('Boton Restar').first()).toBeVisible();
    });

    test('volver a "Todos los componentes" restaura la lista completa', async ({ page }) => {
        await page.getByRole('combobox').selectOption('ProyectoEjemplo2');
        await page.getByRole('combobox').selectOption('null');
        await expect(page.getByText('Boton Sumar').first()).toBeVisible();
    });

    test('cambiar de categoría mantiene el filtro de proyecto', async ({ page }) => {
        await page.getByRole('combobox').selectOption('ProyectoEjemplo2');
        await page.getByRole('button', { name: 'Modulos' }).click();
        // Select still shows ProyectoEjemplo2
        await expect(page.getByRole('combobox')).toHaveValue('ProyectoEjemplo2');
        await expect(page.getByText('Panel Emoji').first()).toBeVisible();
    });
});
