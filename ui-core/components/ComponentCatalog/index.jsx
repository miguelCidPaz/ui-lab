import { useEffect, useState } from 'react';
import { Info } from './info';
import styles from './styles.module.css';
import { NotFoundCatalog } from '../NotFoundCatalog';


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
    // Con la navegacion de la en history es imposible llegar aqui, lo dejo por si a futuro quiere implementarse para next y react-router
    return <NotFoundCatalog />;
  }

  return (
    <div className={componentData.full
      ? styles.background_catalog_component_page
      : styles.background_catalog_component
    }>
      <div className={styles.background_catalog_container}>
        {componentData.content ? (
          <div className={styles.centered_wrapper}>
            <componentData.component {...componentData.props}>
              {componentData.content.map((e, i) => (
                <e.component key={i} {...e.props} />
              ))}
            </componentData.component >
          </div>
        ) : (
          <div className={styles.centered_wrapper}>
            <componentData.component {...componentData.props} />
          </div>
        )}
      </div>

      {!componentData.isPage ? (
        <div className={`${styles.background_catalog_container} ${styles.background_catalog_description}`}>
          <Info data={componentData} />
        </div>
      ) : null}
    </div>
  );
};

