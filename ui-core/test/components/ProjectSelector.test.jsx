import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ProjectSelector } from '../../components/ProjectSelector';

describe('ProjectSelector', () => {
    it('renders default "Todos los componentes" option', () => {
        render(<ProjectSelector projects={[]} handleProyectSelected={vi.fn()} />);
        expect(screen.getByText('Todos los componentes')).toBeInTheDocument();
    });

    it('renders each project as an option', () => {
        render(<ProjectSelector projects={['ProyectoA', 'ProyectoB']} handleProyectSelected={vi.fn()} />);
        expect(screen.getByText('ProyectoA')).toBeInTheDocument();
        expect(screen.getByText('ProyectoB')).toBeInTheDocument();
    });

    it('calls handleProyectSelected with selected value on change', () => {
        const handler = vi.fn();
        render(<ProjectSelector projects={['ProyectoA']} handleProyectSelected={handler} />);
        fireEvent.change(screen.getByRole('combobox'), { target: { value: 'ProyectoA' } });
        expect(handler).toHaveBeenCalledWith('ProyectoA');
    });

    it('calls handleProyectSelected with "null" string when reset to default', () => {
        const handler = vi.fn();
        render(<ProjectSelector projects={['ProyectoA']} handleProyectSelected={handler} />);
        fireEvent.change(screen.getByRole('combobox'), { target: { value: 'null' } });
        expect(handler).toHaveBeenCalledWith('null');
    });

    it('default option has value "null"', () => {
        render(<ProjectSelector projects={[]} handleProyectSelected={vi.fn()} />);
        const defaultOption = screen.getByRole('option', { name: 'Todos los componentes' });
        expect(defaultOption.value).toBe('null');
    });
});
