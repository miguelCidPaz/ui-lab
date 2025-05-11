import { useEffect, useState } from 'react';
import { Info } from './info';
import styles from './styles.module.css';


export const ComponentCatalog = ({ componentData }) => {
  const [screenWidth, setScreenWidth] = useState(() =>
    typeof window !== 'undefined' && window.innerWidth > 1100 ? 'desktop' : 'mobile'
  );

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth > 1100 ? 'desktop' : 'mobile');
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!componentData) {
    return <div className={styles.not_found}>Componente no encontrado</div>;
  }

  return (
    <div className={componentData.full
      ? styles.background_catalog_component_page
      : styles.background_catalog_component
    }>
      <div className={styles.background_catalog_container}>
        {componentData.content ? (
          <componentData.component data={componentData.props}>
            {componentData.content.map((e, i) => (
              <e.component key={i} data={e.props} />
            ))}
          </componentData.component>
        ) : (
          <componentData.component data={componentData.props} />
        )}
      </div>

      {componentData.category !== 'Layouts' && (
        <div className={`${styles.background_catalog_container} ${styles.background_catalog_description}`}>
          <Info data={componentData} />
        </div>
      )}
    </div>
  );
};

