const timeEle = document.getElementById("time");
const ampmEle = document.getElementById("ampm");
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


const toggleBtn = document.querySelector("#toggle");

toggleBtn.addEventListener("click",()=>{
    document.body.classList.toggle("light");
    document.body.classList.toggle("dark");
    const currentTheme = document.body.classList.contains('dark') ? "dark" : "light" ;
    localStorage.setItem("theme",currentTheme);
    toggleBtn.innerText = currentTheme === "dark" ? "Dark" : "Light" ;
});

window.onload = () =>{
    const savedTheme = localStorage.getItem("theme") || "light";
    document.body.classList.remove("light","dark");
    document.body.classList.add(savedTheme);
    toggleBtn.innerText = savedTheme === "dark" ? "Dark" : "Light" ;
}