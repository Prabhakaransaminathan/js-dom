const delitem = document.querySelector(".delete-item");
const ul = document.querySelector(".collection");

ul.addEventListener("click",deleteitem);

function  deleteitem(e){



    if (e.target.parentElement.className ==="delete-item secondary-content") {

        e.target.parentElement.parentElement.remove();
        
    }
 }

