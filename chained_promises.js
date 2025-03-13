function placeOrder() {
    return new Promise((resolve) => {
        const orderId = Math.floor(10 + Math.random() * 90);  
        console.log(`Order ID: ${orderId}`);
        resolve(orderId);
    });
}

function processOrder(orderId) {
    return new Promise((resolve) => {
        const processingCode = Math.floor(10 + Math.random() * 90);  
        console.log(`Processing Code: ${processingCode}`);
        resolve(processingCode);
    });
}

function confirmOrder(processingCode) {
    return new Promise((resolve) => {
        const confirmationNumber = Math.floor(10 + Math.random() * 90);  
        console.log(`Confirmation Number: ${confirmationNumber}`);
        resolve(confirmationNumber);
    });
}

function calculateFinalResult(confirmationNumber) {
    return new Promise((resolve) => {
        const extraNumber = Math.floor(10 + Math.random() * 90); 
        console.log(`Extra Number: ${extraNumber}`);
        resolve(confirmationNumber + extraNumber);
    });
}


placeOrder()
    .then((orderId) => processOrder(orderId))
    .then((processingCode) => confirmOrder(processingCode))
    .then((confirmationNumber) => calculateFinalResult(confirmationNumber))
    .then((finalResult) => console.log(`Final Result: ${finalResult}`))
    .catch((error) => console.log(`Error: ${error}`));
