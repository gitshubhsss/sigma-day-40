//Create a new array whose elements are in uppercase of words present in the original array

let names=["shubham","sachin","pavan","kunal"];
let newArr=names.map((values)=>{
    return values.toUpperCase();
})
console.log(newArr);