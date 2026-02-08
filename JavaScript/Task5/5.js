function getDataCallback(cb) {
    setTimeout(() => {
        cb("Data Loaded");
    }, 1000);
}

function runGetData() {
    getDataCallback(result => console.log(result));
}
