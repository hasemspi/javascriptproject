const btn = document.querySelector("#btn");
const popup_container = document.querySelector('.popup_container');
const close = document.querySelector(".close");

btn.addEventListener("click",function(){
    popup_container.style.display = "block";
})
popup_container.addEventListener("click",function(){
    popup_container.style.display = "none";
})
close.addEventListener("click",function(){
    popup_container.style.display = "none";
})






