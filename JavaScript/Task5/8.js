function delay(msg, time) {
    return new Promise(res => {
        setTimeout(() => {
            console.log(msg);
            res();
        }, time);
    });
}

async function runDelay() {
    await delay(1, 1000);
    await delay(2, 1000);
    await delay(3, 1000);
    await delay(4, 1000)
}
