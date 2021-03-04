let allProducts = document.getElementById("button");
let nameAllProducts = document.getElementById("button1");
let averageProducts = document.getElementById("button2");
let stringWithVowelProducts = document.getElementById("button3");
let sortProducts = document.getElementById("button4");
let table = document.getElementById("nav");
let loader = document.getElementById("img");

function ProductList(name, category, hasDiscount, price) {
    this.name = name;
    this.category = category;
    this.hasDiscount = hasDiscount;
    this.price = price;

}

let products = [new ProductList("Milk", "drink", true, 35), new ProductList("Coca Cola", "drink", false, 85), new ProductList("Fanta", "drink", true, 75), new ProductList("Orange", "fruit", true, 20), new ProductList("Banana", "fruit", false, 45), new ProductList("Tomato", "vegetables", false, 25), new ProductList("Cucumber", "vegetables", true, 40), new ProductList("Noodles", "pasta", false, 17), new ProductList("Pasta", "pasta", false, 18), new ProductList("Spaghetti", "pasta", true, 15), new ProductList("Cheescake", "cake", false, 55), new ProductList("Nutella", "cake", true, 60), new ProductList("Turmeric", "spices", true, 7), new ProductList("Оregano", "spices", false, 5), new ProductList("Plum", "fruit", true, 25)];



allProducts.addEventListener("click", function() {
    //products.forEach(p => console.log(`${p.name} ${p.category} ${p.hasDiscount} ${p.price}`));
    table.innerHTML = "";

    let productsAbove20 = products.filter(p => p.price > 20)
    table.innerHTML += `<tr><th>Name</th><th>Category</th><th>hasDiscount</th><th>Price</th></tr>`
    productsAbove20.forEach(product => table.innerHTML += (`<tr><th>${product.name}</th><th>${product.category}</th><th>${product.hasDiscount}</th><th>${product.price}</th></tr>`))
});

nameAllProducts.addEventListener("click", function() {
    table.innerHTML = "";
    let allProductsTrueDisc = products.filter(product => product.hasDiscount == true && (product.category == "fruit" || product.category == "pasta" || product.category == "cake" || product.category == "vegetables"))
    table.innerHTML += `<tr><th><h3>Name products:</h3></th></tr>`
    allProductsTrueDisc.map(product => table.innerHTML += `<tr><th>${product.name}</th></tr>`)
});

averageProducts.addEventListener("click", function() {
    table.innerHTML = "";

    function sumPriceOfProducts(sum, product) {
        return sum += product;
    }


    let productHasDiscount = products.filter(product => product.hasDiscount == true)
    let priceOfProducts = productHasDiscount.map(product => product.price).reduce(sumPriceOfProducts, 0);
    let averageProducts = priceOfProducts / productHasDiscount.length;
    table.innerHTML += `<h1>The average of all products with discount is ${averageProducts}</h1>`;


});

stringWithVowelProducts.addEventListener("click", function() {
    table.innerHTML = "";

    // nevlaga vo vtoriot uslov i samo mi pecati produkti koi ne se na popust
    let hasNotDiscount = products.filter(product => product.hasDiscount == false && (/[aeiouAEIOU]/i.test(product)))
    table.innerHTML += `<tr><th><h3>Name</h3></th> <th><h3>Price</h3></th></tr>`
    hasNotDiscount.map(product => table.innerHTML += `<tr><th>${product.name}</th><th>${product.price}</th></tr>`)





});

sortProducts.addEventListener("click", function() {
    table.innerHTML = "";

    function copyArray(array) {
        let copyarray = [];
        array.forEach(a => copyarray.push(a));
        return copyarray;
    }

    let productsCopy = copyArray(products);
    productsCopy.sort((product1, product2) => product2.price - product1.price);
    table.innerHTML += `<tr><th>Name</th><th>Category</th><th>hasDiscount</th><th>Price</th></tr>`
    productsCopy.forEach(product => table.innerHTML += (`<tr><th>${product.name}</th><th>${product.category}</th><th>${product.hasDiscount}</th><th>${product.price}</th></tr>`))
});