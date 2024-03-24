// Write a funtion called merge objects that accepts two objeccts and returns a new object which contains all the keys and values of the first object and the second object

let mergeObjects=(student,person)=>{
    let datacopy={...student,...person}
    return datacopy
}
let student={
    name:"shubham ranjae",
    marks:84
}
let person={
    p_name:"Mansi singh",
    city:"Delhi"
}
console.log(mergeObjects(student,person));

/*output-:
    {
  name: 'shubham ranjae',
  marks: 84,
  p_name: 'Mansi singh',
  city: 'Delhi'
    }
PS D:\Sigma 2.0\day 40 JavaScript> */