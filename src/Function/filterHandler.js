function filterHandler(product, stockBy, deliveryBy) {
    return product.filter(({ instock }) => stockBy ? true : instock
    ).filter(({ fastdelivery }) => deliveryBy ? fastdelivery : true)
  }

export default filterHandler  