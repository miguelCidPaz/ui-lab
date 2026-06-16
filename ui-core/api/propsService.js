export async function analyzePropsRequest(propsObject) {
    const response = await fetch('http://localhost:3000/analyze-props', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(propsObject),
    });

    if (!response.ok) {
        throw new Error('Failed to analyze props');
    }

    return response.json();
}


export async function updateProps(component, newValues) {
    const response = await fetch('http://localhost:3000/update-props', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ component, newValues }),
    });

    if (!response.ok) {
        const errorBody = await response.json();
        throw new Error(errorBody.error || 'Failed to update props');
    }

    return response.json();
}

