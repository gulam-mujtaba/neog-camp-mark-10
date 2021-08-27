const billamt = document.querySelector("#bill-amount");
const cashgvn = document.querySelector("#cash-given");
const changebtn = document.querySelector("#click");
const messege = document.querySelector("#error-messege");
const noofnotes = document.querySelectorAll(".notes");

const avlnotes = [2000,500,200,100,20,10,5,1];

changebtn.addEventListener("click", function clickbutton(){
    messege.style.display = "none";

    if (billamt.value > 0){
        if(cashgvn.value >= billamt.value){
            const returnamt = cashgvn.value - billamt.value;
            changecalculator(returnamt);
        }else{
            messegegiven("Cash given is less than bill amount. Please pay the bill amount , warna kaam par lag jao");
        }

        }else{
            messegegiven("Invalid Amount Entered!!");

        }

    }
);


function messegegiven (text){
    messege.style.display = "inline";
    messege.innerText = text;
}
 function changecalculator (returnamt){
     for( i=0; i < avlnotes.length; i++){
         const numberofnotes = Math.trunc(returnamt/avlnotes[i] );
         returnamt %= avlnotes[i];
         noofnotes[i].innerText = numberofnotes;
     }

 }



