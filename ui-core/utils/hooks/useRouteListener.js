import { useEffect } from 'react';
import { NAVIGATION_MODE } from '../../config/generalConfig.js';

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
