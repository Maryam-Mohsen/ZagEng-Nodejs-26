const fs = require('fs');

fs.writeFileSync('data.txt', 'synchronous Data');

const syncContent = fs.readFileSync('data.txt', 'utf8');

console.log('Sync Result:', syncContent);

fs.writeFile('data_async.txt', 'asynchronous Data', (err) => {
    if (err) {
        console.log('Error writing file:', err);
        return;
    }

    fs.readFile('data_async.txt', 'utf8', (err, data) => {
        if (err) {
            console.log('Error reading file:', err);
            return;
        }
        console.log('Async Result:', data);
    });
});