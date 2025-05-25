import styles from './styles.module.css';

export const ProjectSelector = ({ projects, handleProyectSelected }) => {
    return (
        <select
            className={styles.dropdownCatalog}
            onChange={(e) => handleProyectSelected(e.target.value)}
        >
            <option value={null}>Todos los componentes</option>
            {projects.map((project) => (
                <option value={project} key={project}>
                    {project}
                </option>
            ))}
        </select>
    );
};