function getUserP() {
    return new Promise(res => {
        setTimeout(() => {
            console.log("User loaded");
            res({ id: 1 });
        }, 1000);
    });
}

function getOrdersP() {
    return new Promise(res => {
        setTimeout(() => {
            console.log("Orders loaded");
            res([1, 2]);
        }, 1000);
    });
}

function getOrderDetailsP() {
    return new Promise(res => {
        setTimeout(() => {
            console.log("Details loaded");
        }, 1000);
    });
}

function runPromises() {
    getUserP()
    .then(() => getOrdersP())
    .then(orders => getOrderDetailsP(orders[0]))
    .then(res => console.log(res));
}
