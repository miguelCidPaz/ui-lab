import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { HeaderCatalog } from '../../components/HeaderCatalog';

const defaultProps = {
    navigate: vi.fn(),
    setCatalogo: vi.fn(),
    projects: ['ProyectoA', 'ProyectoB'],
    handleProyectSelected: vi.fn(),
    allCategories: ['Componentes', 'Modulos', 'Paginas'],
};

describe('HeaderCatalog', () => {
    it('renders BASENAME as title', () => {
        render(<HeaderCatalog {...defaultProps} />);
        expect(screen.getByText('ui-lab')).toBeInTheDocument();
    });

    it('renders a button per category', () => {
        render(<HeaderCatalog {...defaultProps} />);
        expect(screen.getByText('Componentes')).toBeInTheDocument();
        expect(screen.getByText('Modulos')).toBeInTheDocument();
        expect(screen.getByText('Paginas')).toBeInTheDocument();
    });

    it('calls navigate on category button click', () => {
        const navigate = vi.fn();
        render(<HeaderCatalog {...defaultProps} navigate={navigate} />);
        fireEvent.click(screen.getByText('Componentes'));
        expect(navigate).toHaveBeenCalledTimes(1);
    });

    it('renders project selector dropdown', () => {
        render(<HeaderCatalog {...defaultProps} />);
        expect(screen.getByRole('combobox')).toBeInTheDocument();
    });

    it('renders with empty categories list without crashing', () => {
        render(<HeaderCatalog {...defaultProps} allCategories={[]} />);
        expect(screen.getByText('ui-lab')).toBeInTheDocument();
    });

    it('encodes category name in navigate call', () => {
        const navigate = vi.fn();
        render(<HeaderCatalog {...defaultProps} navigate={navigate} allCategories={['Mi Categoria']} />);
        fireEvent.click(screen.getByText('Mi Categoria'));
        const calledWith = navigate.mock.calls[0][0];
        expect(calledWith).toContain('mi%20categoria');
    });
});
