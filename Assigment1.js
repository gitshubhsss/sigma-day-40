//write the arrow funtion to find the sum and the square of the array element and find the average of the array

let arr=[1,2,3,4,5,6];
let squares;
let sum=0;
let average;
let SumSquAvg=(arr)=>{
    for(i=0;i<arr.length;i++){
        console.log(`square of ${arr[i]} is ${arr[i]*arr[i]}`);
        sum=sum+arr[i];
        average=sum/arr.length;
   }
   console.log(`sum of array is ${sum}`);
   console.log(`average of the sum is ${average}`);
}

console.log(SumSquAvg(arr));
