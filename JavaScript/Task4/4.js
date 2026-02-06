let products = [
    { item: "Mobile"},
    { item: "Laptop" },
    { item: "Camera" }
];

function liveSearch() {
    let query = document.getElementById("searchInput").value;  
    let ul = document.getElementById("productsUl");
    let msg = document.getElementById("noResults");

    ul.innerHTML = "";  

    let filtered = products.filter(function(p) {
        return p.name.includes(query);
    });

    if (filtered.length === 0) {
        msg.style.display = "block";  
    } else {
        msg.style.display = "none";
        filtered.forEach(function(item) {
            let li = document.createElement("li");
            li.innerHTML = item.name ;
            ul.appendChild(li);
        });
    }
}

liveSearch();