import { useEffect, useState } from 'react';

export function useCatalogRouting(CATEGORIES) {
    const [catalogo, setCatalogo] = useState(() => {
        const path = window.location.pathname.replace('/', '').toLowerCase();
        return Object.values(CATEGORIES).find(cat => cat.toLowerCase() === path) || CATEGORIES.components;
    });

    useEffect(() => {
        const updateCatalogFromURL = () => {
            const path = window.location.pathname.replace('/', '').toLowerCase();
            const matched = Object.values(CATEGORIES).find(cat => cat.toLowerCase() === path);
            if (matched) setCatalogo(matched);
        };

        // Escuchar navegación manual (back/forward)
        window.addEventListener('popstate', updateCatalogFromURL);

        // Sobreescribimos pushState para disparar manualmente también
        const originalPushState = window.history.pushState;
        window.history.pushState = function (...args) {
            originalPushState.apply(this, args);
            updateCatalogFromURL(); // ← fuerza actualización
        };

        // Limpieza
        return () => {
            window.removeEventListener('popstate', updateCatalogFromURL);
            window.history.pushState = originalPushState;
        };
    }, [CATEGORIES]);

    return [catalogo, setCatalogo];
}
