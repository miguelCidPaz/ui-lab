import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { COMPONENT_REGISTRY } from '../../config/content.js';
import { type } from 'os';

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

    // Solo proceder si la carpeta del proyecto EXISTE
    if (fs.existsSync(projectDirPath)) {
        if (!fs.existsSync(projectFilePath)) {
            fs.writeFileSync(projectFilePath, JSON.stringify(componentsForProject, null, 2));
            console.log(`✅ Generado components.json para ${project}`);
        } else {
            console.log(`⚠ ${project} ya tiene components.json, no se sobrescribe.`);
        }
    } else {
        console.warn(`⚠ Carpeta del proyecto no encontrada: ${projectDirPath}. No se generó components.json.`);
    }
});
}
