let cl= console.log;


const icon = document.getElementById("toggle");
 const nav = document.querySelector("nav");
//  const toggle = document.getElementById("toggle");
cl(nav);


 const Onclick = (e) =>{
       nav.classList.toggle("show");
       e.target.classList.toggle("fa-bar");
        e.target.classList.toggle("fa-xmark");
       cl(icon)
 }



 icon.addEventListener("click", Onclick);












