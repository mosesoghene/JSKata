let findExpensiveProducts = (products, threshold) => products.filter((product) => product.price >= threshold);

module.exports = {findExpensiveProducts};