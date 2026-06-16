import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function updateComponentRegistry() {
    const proyectosPath = path.resolve(__dirname, '../../../Proyectos');
    const contentPath = path.resolve(__dirname, '../../../ui-core/config/content.js');

    let combinedComponents = [];

    const projectDirs = fs.readdirSync(proyectosPath, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

    projectDirs.forEach((project) => {
        const projectFile = path.resolve(proyectosPath, project, 'components.json');
        if (fs.existsSync(projectFile)) {
            const raw = fs.readFileSync(projectFile, 'utf-8');
            const components = JSON.parse(raw);
            combinedComponents = combinedComponents.concat(components);
        } else {
            console.warn(`⚠ Archivo no encontrado: ${projectFile}`);
        }
    });

    // Convertir cada objeto a sintaxis JS
    const componentsAsJS = combinedComponents.map(c => {
        return `{
  name: ${JSON.stringify(c.name)},
  componentName: ${JSON.stringify(c.componentName)},
  componentPath: ${JSON.stringify(c.componentPath)},
  propsName: ${JSON.stringify(c.propsName)},
  propsPath: ${JSON.stringify(c.propsPath)},
  category: ${JSON.stringify(c.category)},
  state: { label: ${JSON.stringify(c.state)}, color: ${JSON.stringify(c.stateColor)} },
  endpoint: ${JSON.stringify(c.endpoint)},
  methodHttp: ${JSON.stringify(c.methodHttp)},
  useIn: ${JSON.stringify(c.useIn)}
}`;
    }).join(',\n');

    const registryContent = `export const COMPONENT_REGISTRY = [\n${componentsAsJS}\n];\n`;

    let originalContent = fs.readFileSync(contentPath, 'utf-8');

    originalContent = originalContent.replace(
        /export const COMPONENT_REGISTRY = [\s\S]*?;\n/,
        registryContent
    );

    fs.writeFileSync(contentPath, originalContent, 'utf-8');

    console.log('✅ COMPONENT_REGISTRY actualizado exitosamente.');
}
