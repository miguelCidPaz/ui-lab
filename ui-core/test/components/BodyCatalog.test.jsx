import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import BodyCatalog from '../../components/BodyCatalog';

const makeComp = (name) => ({
    name,
    type: `Tipo de ${name}`,
    state: { label: 'Finalizado', color: '#43a047' },
    useIn: ['ProyectoA'],
    category: 'Componentes',
});

describe('BodyCatalog', () => {
    it('renders all components as cards', () => {
        const catalogo = [makeComp('Comp A'), makeComp('Comp B')];
        render(<BodyCatalog navigate={vi.fn()} catalogo={catalogo} />);
        expect(screen.getByText('Comp A')).toBeInTheDocument();
        expect(screen.getByText('Comp B')).toBeInTheDocument();
    });

    it('renders empty without crashing', () => {
        render(<BodyCatalog navigate={vi.fn()} catalogo={[]} />);
        // No cards rendered, no crash
        expect(screen.queryByText('Ir a elemento')).not.toBeInTheDocument();
    });

    it('passes navigate to each OptionCatalog', () => {
        const navigate = vi.fn();
        const catalogo = [makeComp('Comp A')];
        render(<BodyCatalog navigate={navigate} catalogo={catalogo} />);
        // "Ir a elemento" button should be present and trigger navigate
        const btn = screen.getByText('Ir a elemento');
        btn.click();
        expect(navigate).toHaveBeenCalled();
    });
});
