// remove element
const lists= document.querySelectorAll(".collection-item");

// console.log(lists);
// node list


// lists[2].remove();

// class and attributes

 const secondli=document.querySelector("li:nth-child(2)");
 

 const link = secondli.children[0];

 let val;

// class String
val=link.className;



 val=link.classList;
 val.add("prabha");
val.replace("prabha","karan");
 console.log(val);