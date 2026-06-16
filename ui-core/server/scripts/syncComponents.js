import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { COMPONENT_REGISTRY } from '../../config/content.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function syncComponents() {
    const uniqueProjects = new Set();

    const minimalComponents = COMPONENT_REGISTRY.map(c => ({
        name: c.name,
        componentName: c.componentName,
        componentPath: c.componentPath,
        propsName: c.propsName,
        propsPath: c.propsPath,
        type: c.type || '',
        category: typeof c.category === 'string' ? c.category : String(c.category),
        state: typeof c.state.label === 'string' ? c.state.label : String(c.state.label),
        stateColor: typeof c.state.color === 'string' ? c.state.color : String(c.state.color),
        endpoint: c.endpoint,
        methodHttp: c.methodHttp,
        useIn: c.useIn
    }));


    minimalComponents.forEach(c => {
        c.useIn.forEach(project => uniqueProjects.add(project));
    });

    uniqueProjects.forEach(project => {
        const projectDirPath = path.resolve(__dirname, `../../../Proyectos/${project}`);
        const projectFilePath = path.resolve(projectDirPath, 'components.json');
        const componentsForProject = minimalComponents.filter(c => c.useIn.includes(project));

        if (fs.existsSync(projectDirPath)) {
            fs.writeFileSync(projectFilePath, JSON.stringify(componentsForProject, null, 2));
            console.log(`✅ Sincronizado components.json para ${project}`);
        } else {
            console.warn(`⚠ Carpeta del proyecto no encontrada: ${projectDirPath}. No se generó components.json.`);
        }
    });
}
