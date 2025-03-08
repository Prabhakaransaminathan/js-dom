const person={
// properties (key & value)
firstname:"prabha",
lastname:"karan",
age:21,
job:"web dev",
address:{
    city:"kumbakonam",
    state:"tn"
},

// method
getFullName: function(){
    console.log(this.firstname);
}
}
let val;
val=person.address;
person.getFullName();
console.log(val);