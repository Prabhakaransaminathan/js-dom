
let val;

const list=document.querySelector(".collection");
const listitems=document.querySelector(".collection-item");

// Get the children element nodes

val=list.children;
val=list.children[3];
val=list.children[2];
val=list.children[2].children[0];

// FirstChild
val=list.firstElementChild;

// LastChild
val=list.lastElementChild;

// count the child element
 val=list.childElementCount;

//  Get the parent element
val=list.parentElement;

// Get the next sibiling
val=listitems;

val=listitems.nextElementSibling;

// Get the previous sibiling
val=listitems.previousElementSibling;
 console.log(val);
