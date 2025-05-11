import { useEffect } from 'react';
import { NAVIGATION_MODE } from '../config/generalConfig';

/**
 * Hook para escuchar cambios en la URL (solo si estamos en modo "history").
 * Ejecuta un callback cada vez que cambia la ruta.
 *
 * @param {function} callback
 */
export const useRouteListener = (callback) => {
  useEffect(() => {
    if (NAVIGATION_MODE !== 'history') return;

    const handleChange = () => callback();

    window.addEventListener('popstate', handleChange);
    return () => window.removeEventListener('popstate', handleChange);
  }, [callback]);
};
