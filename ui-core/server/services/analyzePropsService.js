export async function handleAnalyzeProps(propsPath, propsName) {
    const fullPath = process.cwd() + propsPath;

    const propsModule = await import(`file://${fullPath}?update=${Date.now()}`);
    const propsObject = propsModule[propsName];

    if (!propsObject) {
        throw new Error('Props not found');
    }

    const analyzed = Object.entries(propsObject).map(([key, value]) => ({
        key,
        type: typeof value,
        value
    }));

    return analyzed;
}
