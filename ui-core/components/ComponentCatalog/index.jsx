import { useEffect, useState } from 'react';
import { Info } from './info';
import styles from './styles.module.css';
import { NotFoundCatalog } from '../NotFoundCatalog';
import { useDynamicComponent } from '../../utils/hooks/useDynamicComponent';

export const ComponentCatalog = ({ componentData }) => {
  const { LoadedComponent, LoadedProps } = useDynamicComponent(componentData);
  
  
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
    return <NotFoundCatalog />;
  }

  if (!LoadedComponent || !LoadedProps) {
    return <div>Cargando componente y props...</div>;
  }

  return (
    <div className={componentData.full
      ? styles.background_catalog_component_page
      : styles.background_catalog_component
    }>
      <div className={styles.background_catalog_container}>
        {componentData.content ? (
          <div className={styles.centered_wrapper}>
            <LoadedComponent {...LoadedProps}>
              {componentData.content.map((e, i) => (
                <e.component key={i} {...e.props} />
              ))}
            </LoadedComponent>
          </div>
        ) : (
          <div className={styles.centered_wrapper}>
            <LoadedComponent {...LoadedProps} />
          </div>
        )}
      </div>

      {!componentData.isPage ? (
        <div className={`${styles.background_catalog_container} ${styles.background_catalog_description}`}>
          <Info data={componentData} props={LoadedProps} />
        </div>
      ) : null}
    </div>
  );
};
