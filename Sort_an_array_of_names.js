function sortNames(names){
    return names.sort((a, b) => a.localeCompare(b));
}
const names = ["Charlie", "Alice", "Bob"];
console.log(sortNames(names));