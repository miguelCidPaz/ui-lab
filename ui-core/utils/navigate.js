import { NAVIGATION_MODE, CATEGORIES } from '../config/generalConfig';


/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
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
