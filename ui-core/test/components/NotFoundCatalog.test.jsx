import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { NotFoundCatalog } from '../../components/NotFoundCatalog';

describe('NotFoundCatalog', () => {
    it('renders 404 heading', () => {
        render(<NotFoundCatalog />);
        expect(screen.getByText('404')).toBeInTheDocument();
    });

    it('renders "Componente no encontrado" message', () => {
        render(<NotFoundCatalog />);
        expect(screen.getByText('Componente no encontrado')).toBeInTheDocument();
    });

    it('renders explanatory paragraph', () => {
        render(<NotFoundCatalog />);
        expect(screen.getByText(/no existe o no se encuentra disponible/)).toBeInTheDocument();
    });
});
