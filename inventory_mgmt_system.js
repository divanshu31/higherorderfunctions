function manageInventory(products){
    //filter
    const lowStockProducts = products.filter(product => product.stock < 100);

    //map 
    const reorderDetails = lowStockProducts.map(product => ({
        name : product.name,
        category : product.category,
        reOrderCost : product.pricePerUnit * (100 - product.stock)
    }));

    //reduce to calculate total order
    const categoryReorderCost = reorderDetails.reduce((acc, product) => {
        acc[product.category] = (acc[product.category] || 0) + product.reOrderCost;
        return acc;
    }, {});

    //sort 
    const sortedCategories = Object.entries(categoryReorderCost)
        .sort((a, b) => b[1] - a[1])
        .reduce((acc, [category, cost]) => {
            acc[category] = cost;
            return acc;
        }, {});
    
    return sortedCategories; 

}


const products = [
    { name: "Laptop", category: "Electronics", stock: 50, pricePerUnit: 1000 },

{ name: "Phone", category: "Electronics", stock: 150, pricePerUnit: 500 },

{ name: "T-shirt", category: "Clothing", stock: 40, pricePerUnit: 20 },

{ name: "Jeans", category: "Clothing", stock: 90, pricePerUnit: 40 },

{ name: "Watch", category: "Accessories", stock: 70, pricePerUnit: 150 } 
];

console.log(manageInventory(products));