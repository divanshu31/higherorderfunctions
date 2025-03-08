//filter function 
const numbers = [1, 2, 3, 4, 5];
const filteredNum = numbers.filter((num) => {
    return num > 3;
})
console.log(filteredNum)


//reduce function - used to output a single value
const arr = [1,2,3,4,5];
const sum = arr.reduce(function (accumulator, currentValue){
    return accumulator+currentValue;
}, -1);
console.log(sum);

//using reduce to flatten array
const nestedArr = [[1, 2], [3, 4], [5]];

const flatArray = nestedArr.reduce(function(accumulator, currentValue){
    return accumulator.concat(currentValue)
}, []);
console.log(flatArray);
//returns a single value based on the acc
//can be used for aggregation (sum, prdocut, average) or combining data.

//egs of reduce to count occurances 
const arrs = ["apple", "banana", "apple", "orange", "banana", "banana"];

const occurances = arrs.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) +1;
    return acc;
}, {});
