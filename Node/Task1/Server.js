const http = require('http');

// building a server
const server = http.createServer((req, res) => {
    const url = req.url;

    // Route 1: Home Page (/)
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write(`
            <html>
                <body>
                    <h1>Welcome to My Personal Page</h1>
                    <p><b>Name:</b> Maryam Mohsen</p> 
                    <p><b>Field:</b> Computer Science</p>
                    <p><b>Motivation:</b> Never stop learning!</p>
                    <a href="/api">Go to API Route</a>
                </body>
            </html>
        `);
        return res.end();
    }

    // Route 2: API (/api)
    if (url === '/api') {
        res.setHeader('Content-Type', 'application/json');
        const data = {
            "name": "Maryam Mohsen",
            "field": "Computer Science",
            "goal": "Become a Cybersecurity Engineer",
            "message": "Keep going, you're doing great"
        };
        return res.end(JSON.stringify(data));
    }

    // Route 3: Not Found
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>404 Not Found</h1>');
    res.end();
});

// Running the server on port 3000
server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});