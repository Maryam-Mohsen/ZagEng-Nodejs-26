function runStorage() {
    let jsonData = `[]`;
    let arr = JSON.parse(jsonData);
    arr.push({ id: 1, title: "Task" });
    jsonData = JSON.stringify(arr);
    console.log(jsonData);
}
