 

 const clearbtn=document.querySelector(".clear-tasks");


//  Mouse Event
// click
//  clearbtn.addEventListener("click", runEvent);

//  Double click
// clearbtn.addEventListener("dblclick", runEvent);

// Mouse down
//    clearbtn.addEventListener("mousedown", runEvent);

// Mouse up
//  clearbtn.addEventListener("mouseup", runEvent);
 
//  Mouse enter
 clearbtn.addEventListener("mouseenter", runEvent);

function runEvent(e){
    if (e.type === "mouseenter"){

document.body.classList.add("add-color");

    }
    if (e.type === "mouseleave")
    {
        document.body.classList.remove("add-color");

    }
}



//  function runEvent(e){
//     console.log(`Event  type ${e.type}`);
//  }