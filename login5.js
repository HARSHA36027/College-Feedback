
// const click=()=>{
//     let mobilenumber=document.querySelector("#input1").value
// let firstname=document.querySelector("#input2").value;
// let lastname=document.querySelector("#input3").value;
// let username=document.querySelector("#input4");

//  const randIdx=  Math.floor(Math.random()*4);
//  console.log(randIdx);
// mobilenumber=mobilenumber.slice(randIdx,5);
//  firstname=firstname.slice(0,1);
// let name=firstname+lastname+"_"+mobilenumber;
// username.value=name

// let button=document.querySelector("button");
//   if(mobilenumber===""||firstname===""||lastname===""){
//    button.disabled=true;
//    console.log("fill box");
// }
// else{
//     button.disabled=false;
//     console.log("hii");
// }
// button.disabled=true;
 

// }
// let button=document.querySelector("button");

// //   button.disabled=true;
// button.addEventListener("click",click);

const click = () => {
    let mobilenumber = document.querySelector("#input1").value;
    let firstname = document.querySelector("#input2").value;
    let lastname = document.querySelector("#input3").value;
    let username = document.querySelector("#input4");

    const randIdx = Math.floor(Math.random() * 4);
    console.log(randIdx);
    mobilenumber = mobilenumber.slice(randIdx, 5);
    firstname = firstname.slice(0, 1);
    let name = firstname + lastname + "_" + mobilenumber;
    username.value = name;
   let alert = false;
    if (mobileValue === "") {
        mobilenumber.style.border = "1px solid red";
        alert = true;
    } else {
        mobilenumber.style.border = ""; // Reset border if not empty
    }
    if (firstNameValue === "") {
        firstname.style.border = "1px solid red";
        alert = true;
    } else {
        firstname.style.border = ""; // Reset border if not empty
    }
// if (alert) {
//         console.log("Please fill in all fields.");
//     } else {
//         button.disabled = false; // Enable button if all fields are filled
//     }
    


         button.disabled = true;
}

// Function to check if any input is empty
const checkInputs = () => {
    let mobilenumber = document.querySelector("#input1").value;
    let firstname = document.querySelector("#input2").value;
    let lastname = document.querySelector("#input3").value;
    let button = document.querySelector("button");

    if (mobilenumber === "" || firstname === "" || lastname === "") {
        button.disabled = true;
        
    } else {
        button.disabled = false;
    }
//     if (mobilenumber === "" ){
//     mobilenumber.style.border="1px soli red";
// }
}

    
 

// Add event listeners to input fields
document.querySelector("#input1").addEventListener("input", checkInputs);
document.querySelector("#input2").addEventListener("input", checkInputs);
document.querySelector("#input3").addEventListener("input", checkInputs);
let button = document.querySelector("button");
button.addEventListener("click", click);
checkInputs();


