import { useState } from 'react';
import { analyzePropsRequest } from '../../api/propsService';

export function useAnalyzeProps() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const analyze = async (propsObject) => {
        setLoading(true);
        setError(null);
        try {
            const result = await analyzePropsRequest(propsObject);
            if (!Array.isArray(result)) {
                throw new Error('Expected array but got: ' + JSON.stringify(result));
            }
            setData([...result]); // 🔥 correcto para array
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return { analyze, loading, data, error };
}
