import { NAVIGATION_MODE, CATEGORIES } from '../config/generalConfig';

export const navigateTo = (path, router = null) => {
  const cleanPath = path.replace(/^\/+|\/+$/g, ''); // sin barras
  const [categoryRaw, ...rest] = cleanPath.split('/');
  const categorySlug = categoryRaw.toLowerCase();

  const allowedCategories = Object.values(CATEGORIES).map((c) => c.toLowerCase());

  if (!allowedCategories.includes(categorySlug)) {
    console.warn(`[navigateTo] Categoría inválida: ${categorySlug}`);
    return;
  }

  const subpath = rest.join('/');
  const encodedSubpath = subpath;

  const fullPath = subpath
    ? `/${categorySlug}/${encodedSubpath}`
    : `/${categorySlug}`;

  switch (NAVIGATION_MODE) {
    case 'next':
      router?.push?.(fullPath);
      break;

    case 'react-router':
      if (typeof router === 'function') router(fullPath);
      break;

    case 'history':
    default:
      if (typeof window !== 'undefined') {
        window.history.pushState({}, '', fullPath);
        window.dispatchEvent(new PopStateEvent('popstate'));
      }
      break;
  }
};
