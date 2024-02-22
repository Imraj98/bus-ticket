// buy ticket function


function ticketBooking(){
   const booking = document.getElementById("ticket-booking");
   booking.scrollIntoView({behavior:"smooth"}) 
}

// hide 

function submit (){
     

  
    

   hideElementById('main');
   hideElementById('header');
 // unhide
 showElementById('modal');
   

 }

//  modal
function continues(){
   
   

   showElementById('main');
   showElementById('header');
 // unhide
 hideElementById('modal');
   

 }
