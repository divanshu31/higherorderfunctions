async function fetchUsers() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if(!response.ok) throw new Error("Failed to fetch users");

        const users = await response.json();
        users.forEach(user => console.log(user.name));
    }
    catch(error){
        console.log("Error:", error.message);
    }   
}
fetchUsers();