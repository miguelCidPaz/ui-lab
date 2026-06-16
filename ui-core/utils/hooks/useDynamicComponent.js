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
  const [loadError, setLoadError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    async function loadEverything() {
      if (!componentData) return;

      setLoadError(null);

      try {
        const module = await import(/* @vite-ignore */componentData.componentPath);
        const resolvedComponent = module[componentData.componentName];

        if (!resolvedComponent) throw new Error(`Export "${componentData.componentName}" no encontrado en ${componentData.componentPath}`);

        if (isMounted) setLoadedComponent(() => resolvedComponent);

        const propsModule = await import(/* @vite-ignore */componentData.propsPath);
        const resolvedProps = propsModule[componentData.propsName];
        if (isMounted) setLoadedProps(() => resolvedProps);
      } catch (err) {
        console.error('Error cargando componente o props dinámicamente:', err);
        if (isMounted) setLoadError(err.message);
      }
    }

    loadEverything();

    return () => {
      isMounted = false;
    };
  }, [componentData]);

  return { LoadedComponent, LoadedProps, loadError };
}
