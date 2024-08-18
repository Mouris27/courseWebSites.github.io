var container = document.getElementById("container")

fetch("https://fakestoreapi.com/products")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        data.forEach(product => {
            console.log(product.title);
            container.innerHTML += `
            <div class="box">
                <div class="details">
                    <h2>${product.title}</h2><hr>
                    <p>Price: ${product.pric}$</p><hr>
                    <p>Category: ${product.category}</p><hr>
                </div>
                <img src="${product.image}">
            </div>
            `
        });
    })