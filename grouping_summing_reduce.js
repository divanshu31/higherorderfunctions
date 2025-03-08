function countCategories(products){
    const categoryCount = products.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
    }, {});
    console.log(categoryCount);

    const sortedCategories = Object.entries(categoryCount)
            .sort((a, b) => b[1] - a[1])
            .map(entry => entry[0]);
    return console.log(sortedCategories);
}

const products = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];
countCategories(products);