async function runAsync() {
    let user = await getUserP();
    let orders = await getOrdersP(user.id);
    let details = await getOrderDetailsP(orders[0]);
    console.log(details);
}
