function checkNumber(num) {
    return new Promise((res, rej) => {
        if (num > 0) res("Positive");
        else if (num === 0) res("Zero");
        else rej("Negative");
    });
}

function runCheck() {
    checkNumber(-5)
    .then(r => console.log(r))
    .catch(e => console.log(e));

    (async () => {
        try {
            let r = await checkNumber(5);
            console.log(r);
        } catch (e) {
            console.log(e);
        }
    })();
}
