function getUser(cb) {
    setTimeout(() => {
        console.log("User loaded");
        cb({ id: 1 });
    }, 1000);
}

function getOrders(userId, cb) {
    setTimeout(() => {
        console.log("Orders loaded");
        cb([1, 2]);
    }, 1000);
}

function getOrderDetails(orderId, cb) {
    setTimeout(() => {
        console.log("Details loaded");
    }, 1000);
}

function runCallbacks() {
    getUser(user => {
        getOrders(user.id, orders => {
            getOrderDetails(orders[0], details => {
                console.log(details);
            });
        });
    });
}
