import { useState, useEffect } from 'react';
import styles from './styles.module.css';

export const FormCatalog = ({ mode, data, onSubmit, onCancel }) => {
    const [formValues, setFormValues] = useState(() => {
        if (mode === 'edit-props') {
            return Object.fromEntries(data.map(({ key, value }) => [key, value]));
        } else if (mode === 'select-repo') {
            return { selectedRepo: data[0] || '' };
        }
    });

    // 🔥 Sincronizar formValues cuando data cambia
    useEffect(() => {
        if (mode === 'edit-props') {
            setFormValues(
                Object.fromEntries(data.map(({ key, value }) => [key, value]))
            );
        } else if (mode === 'select-repo') {
            setFormValues({ selectedRepo: data[0] || '' });
        }
    }, [data, mode]);

    const handleChange = (key, type, newValue) => {
        const castedValue = type === 'number' ? Number(newValue) : newValue;
        setFormValues((prev) => ({ ...prev, [key]: castedValue }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formValues);
    };

    return (
        <form className={styles.option_body_catalog} onSubmit={handleSubmit}>
            <h3 className={styles.option_title}>
                {mode === 'edit-props' ? 'Modificar Props' : 'Seleccionar Repositorio'}
            </h3>

            {mode === 'edit-props' &&
                data.map(({ key, type }) => (
                    <div key={key} className={styles.option_form_group}>
                        <label className={styles.option_label}>
                            {key} ({type})
                        </label>
                        <input
                            className={styles.option_input}
                            type={type === 'number' ? 'number' : 'text'}
                            value={formValues[key]}
                            onChange={(e) =>
                                handleChange(key, type, e.target.value)
                            }
                        />
                    </div>
                ))}

            {mode === 'select-repo' && (
                <div className={styles.option_form_group}>
                    <label className={styles.option_label}>Selecciona repositorio</label>
                    <select
                        className={styles.option_input}
                        value={formValues.selectedRepo}
                        onChange={(e) =>
                            setFormValues({ selectedRepo: e.target.value })
                        }
                    >
                        {data.map((repo, index) => (
                            <option key={index} value={repo}>
                                {repo}
                            </option>
                        ))}
                    </select>
                </div>
            )}

            <div className={styles.option_container_buttons}>
                <button type="submit" className={styles.option_button}>
                    Guardar
                </button>
                <button
                    type="button"
                    className={styles.option_button}
                    onClick={onCancel}
                >
                    Cancelar
                </button>
            </div>
        </form>
    );
};
