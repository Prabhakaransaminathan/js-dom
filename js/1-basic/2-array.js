const number=[31,56,32,87,90,54,12,41,90,56];
 

let val;
// get the array length
val=number.length;

// Check if is a array
val=Array.isArray(number);

// get the single value
val=number[1];
val=number[4];

// Insert into array
val=number[1]=43;

// find the index of value
val=number.indexOf(54);

// // Mutate Array

// // Add on the end
// number.push(1000);

// //  Add on the front
// number.unshift(2000);   

// // Take of from the end
// number.pop();  
// number.pop();  
// number.pop();

// // Take of from the front
// number.shift();
// number.shift();

// splice ==> To remove and  To Add
const fruits=["apple","orange","Lemon","fig"]  

// // To remove
// val = fruits.splice(2,4);

// To add
// val=fruits.splice(1,1,"kiwi")

// To reverse the Array


console.log(number);
val=number.reverse();



console.log(val);
console.log(fruits);