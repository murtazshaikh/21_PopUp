const open = document.getElementById("open");
const close = document.getElementById("close");
const mainpopup = document.getElementById("mainpopup");

open.addEventListener("click",()=>{
    mainpopup.classList.add("active");
})

close.addEventListener("click",()=>{
    mainpopup.classList.remove("active");
})
