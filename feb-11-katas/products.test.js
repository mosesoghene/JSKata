const {findExpensiveProducts} = require("./products.js");

test("functions returns array greater tha threshold", () => {
    let products = [
        { id: 1, name: "Laptop", price: 1200 },
        { id: 2, name: "Phone", price: 800 },
        { id: 3, name: "Tablet", price: 500 },
        { id: 4, name: "Desktop", price: 700 }
    ];
    
    expect(findExpensiveProducts(products, 700).length).toBe(3);

})