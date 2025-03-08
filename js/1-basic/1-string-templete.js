const name="prabha";
const age=21;
const job="web dev";
const city="kumbakonam";
 let val;
//  without templete string
// val ="my name is "+" "+ name + " my age is"+" "+ age +" my job is"+" "+ job +" city" +" "+ city;
 
//  with templete string
val=`my name is ${name} and my age is ${age} my job is ${job} city ${city}`;
console.log(val);