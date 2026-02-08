function getDataPromise() {
    return new Promise(res => {
        setTimeout(() => {
            res("Data Loaded");
        }, 1000);
        });
}
