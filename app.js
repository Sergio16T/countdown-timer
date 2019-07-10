loadEventListeners(); 

function loadEventListeners() { 
    document.addEventListener('DOMContentLoaded', function() {calcTime(); });
}
var targetDate= document.getElementById('target-date').id,
    date, 
    now =new Date();
    newYear= new Date('1.1.2020').getTime(), 
    startTimer = ''; 

function calcTime(dates) {
     clearInterval(startTimer); 

     if (typeof (dates) =='undefined') { 
         date = new Date(newYear).getTime(); 
     } else {
         date = new Date(dates).getTime();
     }
    }

function updateTimer(date){
    var now= new Date().getTime(); 
    var t = date - now; 

    /*var t = Date.parse(endTime) - Date.parse(new Date()); */
    var seconds = Math.floor( (t/1000) % 60); 
    var minutes = Math.floor( (t/1000/60) % 60); 
    var hours = Math.floor( (t/(1000*60*60)) % 24 ); 
    var days = Math.floor ( t/(1000*60*60*24) );
    
    document.querySelector('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours; 
    document.getElementById('minutes').innerHTML = minutes; 
    document.getElementById('seconds').innerHTML = seconds; 

    if (now >= date) {
        clearInterval(startTimer);

        document.getElementById('days').innerHTML = 'D'; 
        document.getElementById('hours').innerHTML = 'O';
        document.getElementById('minutes').innerHTML = 'N'; 
        document.getElementById('seconds').innerHTML ='E'; 
        
    }
    }

startTimer = setInterval(function() {updateTimer(date);}, 1000);  

