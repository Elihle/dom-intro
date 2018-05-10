
var billItemType = document.querySelector(".billItemType");
var radioBillAddBtn = document.querySelector(".radioBillAddBtn");

var callTotalTwo = document.querySelector(".callTotalTwo");
var smsTotalTwo = document.querySelector(".smsTotalTwo");
var totalTwo = document.querySelector(".totalTwo");

var refFactories = Factories();

radioBillAddBtn.addEventListener('click', function(){
  Factories();
  radioTotal();
});

function radioTotal(){
var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
if (checkedRadioBtn){
  var billItemType = checkedRadioBtn.value;
}
  refFactories.billT(billItemType);

  callTotalTwo.innerHTML = refFactories.allC().toFixed(2);
  smsTotalTwo.innerHTML = refFactories.allS().toFixed(2);
  totalTwo.innerHTML = refFactories.grandT().toFixed(2);

     if (refFactories.grandT() >= 30){
        totalTwo.classList.add("warning");
    }
      if (refFactories.grandT() >= 50){
        totalTwo.classList.add("danger");
     }
     if (refFactories.grandT() < 20){
       totalTwo.classList.remove("warning");
     }
     else if (refFactories.grandT() < 50){
       totalTwo.classList.remove("danger");
     }

}


function Factories() {
  var callA = 0;
  var smsA = 0;
  var totalA = 0;
function radioBillTotal(totalD){
   if (totalD === 'call'){
  callA += 2.75;
  }

 else if (totalD === 'sms'){
  smsA += 0.75;

}

totalA = callA + smsA;
  }

function getCalls(){
  return callA;
}
function getSmss(){
  return smsA;
}
function getTotalA(){
  return totalA;
}

return {
  billT : radioBillTotal,
  allC : getCalls,
  allS : getSmss,
  grandT : getTotalA
}

}
