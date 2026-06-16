import fs from 'fs';

export async function handleUpdateProps(component, newValues) {
    const propsPath = process.cwd() + component.propsPath;
    const propsName = component.propsName;

    const fileContent = fs.readFileSync(propsPath, 'utf-8');

    const newPropsString = `{\n${Object.entries(newValues)
        .map(([key, value]) => `  ${key}: ${JSON.stringify(value)}`)
        .join(',\n')}\n}`;
    const regex = new RegExp(`(export\\s+const\\s+${propsName}\\s*=\\s*)({[\\s\\S]*?});`);
    const newFileContent = fileContent.replace(regex, `$1${newPropsString};`);

    fs.writeFileSync(propsPath, newFileContent, 'utf-8');

    return { message: `Props for ${propsName} updated successfully.` };
}
