//create a new Array usig the map funtion whose each element is equal to the original element +5
//suppose we have [1,2,3,4,5]=[6,7,8,9,10];

let arr=[1,2,3,4,5,6];

let newArr=arr.map((value)=>{
    return value+5;
})
console.log(newArr);
//[ 6, 7, 8, 9, 10, 11 ]