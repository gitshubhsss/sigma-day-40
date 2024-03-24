// Write a funtion called doubleAndReturnArgs Which accepts an array and a variable number of original arguments  the funtion should return a new array with the array values and all of the additional  arguments doubled

let doubleAndReturnArgs=(arr,...args)=>[
    ...arr,
    ...args.map((value)=>{
        return value*2;
    })
]

console.log(doubleAndReturnArgs([1,5,2,5],6565,78));
console.log(doubleAndReturnArgs([1],6565,78));