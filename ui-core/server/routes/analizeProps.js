import { handleAnalyzeProps } from '../services/analyzePropsService.js';

export const analizeProps = (req, res) => {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });

    req.on('end', async () => {
        try {
            const { propsPath, propsName } = JSON.parse(body);
            const result = await handleAnalyzeProps(propsPath, propsName);

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(result));
        } catch (err) {
            console.error(err);

            if (err.message === 'Props not found') {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: err.message }));
            } else {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: err.message || 'Internal server error' }));
            }
        }
    });
};
