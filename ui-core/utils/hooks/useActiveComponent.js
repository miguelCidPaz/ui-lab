import { useEffect, useState } from 'react';
import { getComponentFromPath } from '../getComponentFromPath';

const isComponentDetailPath = (pathname) => {
  const cleanPath = pathname.replace(/^\/+|\/+$/, '');
  const parts = cleanPath.split('/');
  if (parts.length < 2 || !parts[1]) return false;
  return decodeURIComponent(parts[1]).includes('|');
};

export const useActiveComponent = (allComponents) => {
  const [componentData, setComponentData] = useState(() =>
    getComponentFromPath(window.location.pathname, allComponents) || null
  );
  const [isDetailPath, setIsDetailPath] = useState(() =>
    isComponentDetailPath(window.location.pathname)
  );

  const updateComponentFromURL = () => {
    const pathname = window.location.pathname;
    setIsDetailPath(isComponentDetailPath(pathname));
    const comp = getComponentFromPath(pathname, allComponents);
    setComponentData(comp || null);
  };

  useEffect(() => {
    window.addEventListener('popstate', updateComponentFromURL);
    return () => window.removeEventListener('popstate', updateComponentFromURL);
  }, []);

  return { componentData, isDetailPath };
};
