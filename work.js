let Display= document.getElementById("display");
let button= document.querySelector("#submit");
let add=document.querySelector(".text");
let check=document.querySelector(".show");
let btn=document.querySelector("#btn");
let lis=document.querySelector(".space");
let show="";


button.addEventListener("click",()=>{
    if(Display.value===""){
        alert("Enter the item name");
    }else{
        show=show +`<button onclick="classList.add('cross')" class="space">`+Display.value+`</button>`
        add.innerHTML=show;
        Display.value="";
    }    
})

btn.addEventListener("click",()=>{
    add.innerHTML="";
    show="";
    console.log("clicked")
})

lis.addEventListener("keydown",()=>{
    lis.classList.add("cross");
})