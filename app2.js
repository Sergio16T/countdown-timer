
const chosenDate = new Date('November 11, 2019');

setInterval(function() { 
    const today= Date.now();  
    const diff = chosenDate - today; 
    

    let days = Math.floor(diff / (1000* 60 * 60 *24)); 
    let hours = Math.floor( (diff % (1000 * 60 *60 * 24)) / (1000 * 60 *60) ); 
    let minutes = Math.floor( (diff % (1000 *60 *60)) / (1000 * 60));
    let seconds = Math.floor ( (diff % (1000 *60)) / 1000); 
   
  document.querySelector('.c-days-number').innerHTML= days; 
  document.querySelector('.c-hours-number').innerHTML= hours; 
  document.querySelector('.c-minutes-number').innerHTML= minutes; 
  document.querySelector('.c-seconds-number').innerHTML= seconds;

  // below if statement currently not working in app. 
  if (today >= chosenDate) {
    clearInterval(startTimer);

    document.querySelector('.c-days-number').innerHTML= "N"; 
    document.querySelector('.c-hours-number').innerHTML= "O"; 
    document.querySelector('.c-minutes-number').innerHTML= "TI"; 
    document.querySelector('.c-seconds-number').innerHTML= "ME";

}
  
    
}, 1000);







