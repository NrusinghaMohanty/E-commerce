function sortingHandler(product, sortBy) {
    if (sortBy === "LOW_TO_HIGH") {
      return [...product].sort((a, b) => a.price - b.price)
    }
    if (sortBy === "HIGH_TO_LOW") {
      return [...product].sort((a, b) => b.price - a.price)
    }
    return product;
  }

export default sortingHandler;  