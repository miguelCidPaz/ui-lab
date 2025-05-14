import { useEffect, useState } from 'react';
import { getComponentFromPath } from '../getComponentFromPath';

export const useActiveComponent = (allComponents) => {
  const [componentData, setComponentData] = useState(null);

  const updateComponentFromURL = () => {
    const comp = getComponentFromPath(window.location.pathname, allComponents);
    setComponentData(comp || null);
  };

  useEffect(() => {
    // Ejecutar al montar
    updateComponentFromURL();

    // Escuchar cambios en la URL (ej. navigateTo, popstate, etc.)
    window.addEventListener('popstate', updateComponentFromURL);

    return () => {
      window.removeEventListener('popstate', updateComponentFromURL);
    };
  }, []);

  return componentData;
};
