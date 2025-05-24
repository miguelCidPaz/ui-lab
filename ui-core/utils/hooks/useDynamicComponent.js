import { useEffect, useState } from 'react';

/**
 * Hook para cargar dinámicamente un componente, adaptable a cliente o servidor.
 * 
 * @param {Object} componentData - Objeto que contiene componentName, componentPath, loader.
 * @param {string} mode - 'dynamic' para import dinámico, 'static' para usar require en SSR.
 * @returns Referencia al componente cargado (o null si aún no está listo).
 */
export function useDynamicComponent(componentData) {
  const [LoadedComponent, setLoadedComponent] = useState(null);
  const [LoadedProps, setLoadedProps] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function loadEverything() {
      if (!componentData) return;

      try {
        // Cargar componente dinámicamente
        const module = await import(/* @vite-ignore */ componentData.componentPath);
        const resolvedComponent = module.default || module[componentData.componentName];
        if (isMounted) {
          setLoadedComponent(() => resolvedComponent);
        }

        // Cargar props dinámicamente
        const propsModule = await import(/* @vite-ignore */ componentData.propsPath);
        const resolvedProps = propsModule[componentData.propsName];
        if (isMounted) {
          setLoadedProps(() => resolvedProps);
        }
      } catch (err) {
        console.error('Error cargando componente o props dinámicamente:', err);
      }
    }

    loadEverything();

    return () => {
      isMounted = false;
    };
  }, [componentData]);

  return { LoadedComponent, LoadedProps };
}
