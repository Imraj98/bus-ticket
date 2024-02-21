function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}



// cost
 function updateTotalCost(value){
    
      const totalCost = getConvertedValue('total-price');
      const sum = totalCost+ value;
      document.getElementById("total-price").innerText = sum;
 }

// grand total
 function updateGrandtotal(status){

    const totalCost = getConvertedValue('total-price');
     if(status==undefined){
        

    document.getElementById("grand-total").innerText=totalCost;

     }
     else{
        const couponCode = document.getElementById("coupon-code").value;
        if(couponCode =="NEW15"){
                const discount =totalCost*15/100;
                document.getElementById("grand-total").innerText= parseFloat(totalCost-discount);
        }
        else if(couponCode =="Couple20"){
            const discount =totalCost*0.2;
                document.getElementById("grand-total").innerText= parseFloat(totalCost-discount);
        }
        else{
            alert("Please enter valid coupon code")
        }
    
     }


 }







// seat left
function getConvertedValue(id){
    const seatNumber = document.getElementById(id).innerText;
    const convertSeatNumber = parseInt(seatNumber);
    return convertSeatNumber;
}
 
// seat btn


 const allBtn = document.getElementsByClassName("add-btn");
 
 for(const btn of allBtn){
    btn.addEventListener('click',function(event){
          const seatPostion =event.target.innerText;
          const classes = 'Economoy';
          const number  = 550;
          

          const selectedContainer = document.getElementById("seat-container");


          const div = document.createElement("div");
          div.classList.add("flex");
          div.classList.add("justify-around");


          const p1 =document.createElement("p");
          const p2 =document.createElement("p");
          const p3 =document.createElement("p");

          p1.innerText = seatPostion;
          p2.innerText =classes;
          p3.innerText = number;

          div.appendChild(p1);
          div.appendChild(p2);
          div.appendChild(p3);

          selectedContainer.appendChild(div);

          updateTotalCost(number);
          updateGrandtotal()
    })
 }


