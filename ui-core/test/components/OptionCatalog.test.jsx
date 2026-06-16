import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import OptionCatalog from '../../components/OptionCatalog';

const mockComponent = {
    name: 'Boton Test',
    type: 'Un botón de prueba',
    state: { label: 'Finalizado', color: '#43a047' },
    useIn: ['ProyectoA'],
    category: 'Componentes',
};

describe('OptionCatalog', () => {
    it('renders component name', () => {
        render(<OptionCatalog component={mockComponent} navigate={vi.fn()} />);
        expect(screen.getByText('Boton Test')).toBeInTheDocument();
    });

    it('renders component type', () => {
        render(<OptionCatalog component={mockComponent} navigate={vi.fn()} />);
        expect(screen.getByText('Un botón de prueba')).toBeInTheDocument();
    });

    it('renders state label', () => {
        render(<OptionCatalog component={mockComponent} navigate={vi.fn()} />);
        expect(screen.getByText('Finalizado')).toBeInTheDocument();
    });

    it('renders useIn project tags', () => {
        render(<OptionCatalog component={mockComponent} navigate={vi.fn()} />);
        expect(screen.getByText('ProyectoA')).toBeInTheDocument();
    });

    it('calls navigate with correct slug on button click', () => {
        const navigate = vi.fn();
        render(<OptionCatalog component={mockComponent} navigate={navigate} />);
        fireEvent.click(screen.getByText('Ir a elemento'));
        expect(navigate).toHaveBeenCalledWith('/componentes/Boton%20Test|ProyectoA');
    });

    it('uses first useIn entry in slug for multi-project components', () => {
        const navigate = vi.fn();
        const multi = { ...mockComponent, useIn: ['ProyectoA', 'ProyectoB'] };
        render(<OptionCatalog component={multi} navigate={navigate} />);
        fireEvent.click(screen.getByText('Ir a elemento'));
        expect(navigate).toHaveBeenCalledWith('/componentes/Boton%20Test|ProyectoA');
    });

    it('renders multiple useIn project tags', () => {
        const multi = { ...mockComponent, useIn: ['ProyectoA', 'ProyectoB'] };
        render(<OptionCatalog component={multi} navigate={vi.fn()} />);
        expect(screen.getByText('ProyectoA')).toBeInTheDocument();
        expect(screen.getByText('ProyectoB')).toBeInTheDocument();
    });
});
