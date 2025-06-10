import { useAnalyzeProps } from '../../utils/hooks/useAnalyzeProps';
import { updateProps } from '../../api/propsService';
import { useEffect, useState } from 'react';
import { FormCatalog } from '../FormCatalog';
import styles from './styles.module.css';

export const OptionCatalog = ({ component, navigate }) => {
    const { analyze, loading, data, error } = useAnalyzeProps();
    const [showForm, setShowForm] = useState(false);

    const goComponent = () => {
        const base = component.category.toLowerCase();
        const slug =
            encodeURIComponent(component.name) +
            '|' +
            encodeURIComponent(component.useIn.join(','));
        navigate(`/${base}/${slug}`);
    };

    const handleAnalyzeProps = () => {
        analyze(component);
        setShowForm(true);
    };

    const handleSubmitForm = async (newValues) => {
        try {
            const result = await updateProps(component, newValues);
            console.log('Props actualizados correctamente:', result);

            await analyze(component); // refresca los datos, pero no toca showForm aquí

            setShowForm(false); // 🔥 ciérralo tú explícitamente
        } catch (err) {
            console.error('Error al actualizar props:', err);
        }
    };


    const handleCancelForm = () => {
        setShowForm(false); // simplemente cierras
    };

    return (
        <div className={styles.option_body_catalog}>
            <p className={styles.option_title}>{component.name}</p>
            <p className={styles.option_type}>{component.type}</p>
            <div className={styles.option_state_wrapper}>
                <p className={styles.option_state}>{component.state.label}</p>
                <div
                    className={styles.option_marker}
                    style={{ '--background-color-option': component.state.color }}
                ></div>

                <div className={styles.option_usein_wrapper}>
                    {component.useIn.map((use, index) => (
                        <p key={index} className={styles.option_use}>
                            {use}
                        </p>
                    ))}
                </div>
            </div>
            <div className={styles.option_container_buttons}>
                <button
                    className={styles.option_button}
                    onClick={goComponent}
                >
                    Ir a elemento
                </button>
                <button
                    className={styles.option_button}
                    onClick={console.log('No implementado')}
                >
                    Copiar componente
                </button>
                <button
                    className={styles.option_button}
                    onClick={handleAnalyzeProps}
                    disabled={loading}
                >
                    {loading ? 'Cargando...' : 'Modificación de props'}
                </button>
            </div>
            {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}

            {showForm && data && (
                <FormCatalog
                    mode="edit-props"
                    data={data}
                    onSubmit={handleSubmitForm}
                    onCancel={handleCancelForm}
                />
            )}
        </div>
    );
};
