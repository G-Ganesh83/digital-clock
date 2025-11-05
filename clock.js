let timeEle = document.getElementById("time");
let ampmEle = document.getElementById("ampm");
function updateClock(){
   let now = new Date();
    let hours =  now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = "AM";

    if(hours>=12){
        ampm = "PM";
        if(hours>12)hours-=12;
    }
    if(hours==0){
        hours=12;
    }
    hours = hours.toString().padStart(2,"0");
    minutes = minutes.toString().padStart(2,"0");
    seconds = seconds.toString().padStart(2,"0");

    timeEle.innerText = `${hours}:${minutes}:${seconds}`;
    ampmEle.innerText = ampm ;
}

setInterval(updateClock,1000)
    updateClock();


let toggle = document.querySelector("#toggle");

toggle.addEventListener("click",()=>{
    document.body.classList.toggle("light");
    document.body.classList.toggle("dark");
    if(document.body.classList.contains('light')){
        toggle.innerText="Light";
    }
    else{
        toggle.innerText="Dark";
    }
})