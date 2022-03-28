const defultdate = "3 may 2022";
const Dayss = document.querySelector("#days");
const houress = document.querySelector("#houre");
const miness = document.querySelector("#mine");
const secondss = document.querySelector("#second");

function countdown(){
const todaldays = new Date(defultdate);
const cureentDate = new Date();
const TotalDate = (todaldays-cureentDate)/1000;
const Days = Math.floor(TotalDate/3600/24);
const Houres = Math.floor((TotalDate/3600) % 24);
const Mines = Math.floor(TotalDate/60) % 60;
const second = Math.floor(TotalDate) % 60;

Dayss.innerText=Days;
houress.innerText=Houres;
miness.innerText=Mines;    
secondss.innerText=second;    

//console.log(Days,Houres,Mines,second);


}
setInterval(countdown, 1000);
countdown();