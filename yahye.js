 
 
 let count = new Date(" dec,30,2050 00:00:00").getTime();
let x = setInterval( () =>{
    let now = new Date().getTime();
    let distance = count - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);




   document.getElementById('days').innerHTML = days;
   document.getElementById('hrs').innerHTML  = hours
   document.getElementById('min').innerHTML  = minutes
   document.getElementById('scd').innerHTML  = seconds

},1000)

