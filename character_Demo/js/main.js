const text = document.querySelector("#txt");
const results = document.querySelector(".result");


text.addEventListener("input", function(e){
    const texts = text.value.length;
    results.innerText = texts;
})