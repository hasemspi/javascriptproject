
const faquery = document.querySelectorAll(".faq");

faquery.forEach(faq=>{
    faq.addEventListener("click", function(){
        faq.classList.toggle('active');
    })
})
