function employeePerform(employees){
    const filteredEmp = employees.filter(emp => emp.tasksCompleted > 5);

    //map employees to include name and performance level
    const mappedEmployees = filteredEmp.map(emp =>{
        let performance;
        if(emp.rating > 4.5){
            performance = "Excellent";
        }
        else if(emp.rating >= 3 && emp.rating <= 4.5) performance = "Good";
        else performance = "Needs Improvement";

        return { name : emp.name, performance};
    });

    const performanceOrder = { "Excellent": 3, "Good": 2, "Needs Improvement": 1 };
    mappedEmployees.sort((a, b) => performanceOrder[b.performance] - performanceOrder[a.performance]);
    
    return mappedEmployees;
}



const employees = [
    { name: "Alice", tasksCompleted: 8, rating: 4.7 },

    { name: "Bob", tasksCompleted: 4, rating: 4.0 },

    { name: "Charlie", tasksCompleted: 6, rating: 3.5 },

    { name: "David", tasksCompleted: 10, rating: 4.9 },

    { name: "Eve", tasksCompleted: 7, rating: 2.8 }

]

console.log(employeePerform(employees))