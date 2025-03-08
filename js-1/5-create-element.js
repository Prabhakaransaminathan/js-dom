{/* <li class="collection-item">
List Item 5
<a href="#" class="delete-item secondary-content" title="im Link">
<i class ="fa fa-remove"></i>
</a>
<a href="#" class="edit-item secondary-content" title="im Link">
    <i class="fa fa-edit"></i>
</a>
</li> */}


// create Element

const li=document.createElement("li");
li.className="collection-items";


// add id
li.id="item-6";

// Add text
li.innerText="List Item 6";

// Create Element
const Link =document.createElement("a");
Link.className="delete-item secondary-content";
//add InnerHtml
Link.innerHTML=`<i class ="fa fa-remove"></i>`;

// append
li.appendChild(Link);
document.querySelector("ul").appendChild(li);

console.log();