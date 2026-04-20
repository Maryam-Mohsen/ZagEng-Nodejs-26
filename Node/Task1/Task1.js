//import { writeFileSync, readFileSync, writeFile, readFile } from 'fs';
const fs = require('fs');
writeFileSync('data.txt', 'synchronous Data');

const syncContent = readFileSync('data.txt', 'utf8');

console.log('Sync Result:', syncContent);

writeFile('data_async.txt', 'asynchronous Data', (err) => {
    if (err) {
        console.log('Error writing file:', err);
        return;
    }

    readFile('data_async.txt', 'utf8', (err, data) => {
        if (err) {
            console.log('Error reading file:', err);
            return;
        }
        console.log('Async Result:', data);
    });
});