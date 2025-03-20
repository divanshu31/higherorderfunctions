async function fetchProducts() {
    try{
        const response = await fetch("https://fakestoreapi.com/products");
        if(!response.ok) throw new Error("Failed to fetch products");

        const products = await response.json();

        products.forEach(products =>{
            console.log(`Title : ${products.title}`);
            console.log(`Price : ${products.price}`);
            console.log(`Image : ${products.image}`);
        });

        const totalPrice = products.reduce((sum, products) => sum + products, 0);
        console.log(`Total price : ${totalPrice.toFixed(2)}`);
    }
    catch(error){
        console.error("Failed to Load!");
    }
}
fetchProducts();