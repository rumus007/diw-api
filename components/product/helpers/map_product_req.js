module.exports = function (product, productDetails) {
    if (productDetails.name)
        product.name = productDetails.name;
    if (productDetails.category)
        product.category = productDetails.category;
    if (productDetails.quantity)
        product.quantity = productDetails.quantity;
    if (productDetails.soldPrice)
        product.soldPrice = productDetails.soldPrice;
    if (productDetails.costPrice)
        product.costPrice = productDetails.costPrice;

    return product;     
}