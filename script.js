let hours = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");



setInterval(() => {
    let currentTime = new Date();
hours.innerHTML = currentTime.getHours();
min.innerHTML = currentTime.getMinutes();
sec.innerHTML = currentTime.getSeconds();
},1000);