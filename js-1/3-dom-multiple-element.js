const list =document.querySelectorAll(".collection-item");
console.log(list);
// nodelist
list.forEach(function(e, i){
    e.style.background="blue";
})