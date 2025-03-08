

const taskinput=document.querySelector("#task");


// Keydown
// taskinput.addEventListener("keydown",runEvent);

// Keyup
//  taskinput.addEventListener("keyup",runEvent);

//  key press
//  taskinput.addEventListener("keypress",runEvent);

// Focus
//  taskinput.addEventListener("focus",runEvent);

// Blur
//  taskinput.addEventListener("blur",runEvent);

// cut
//   taskinput.addEventListener("cut",runEvent);

//   copy
//   taskinput.addEventListener("copy",runEvent);

//   paste
//   taskinput.addEventListener("paste",runEvent);




function runEvent(e){
    console.log(`type ${e.type}`);
    console.log(e.target.value);

}