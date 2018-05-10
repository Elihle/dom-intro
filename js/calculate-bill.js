var calculateBtn = document.querySelector(".calculateBtn");
var billTotal = document.querySelector(".billTotal");
var billString = document.querySelector(".billString");


// Dom function
  function calculateBill(){
    var totalData = billString.value;
    var totals = totalPhoneBill(totalData);

    billTotal.innerHTML = totals;
    if (totals >= 20){
      billTotal.classList.add("warning");
    }
    if (totals >= 30){
      billTotal.classList.add("danger");
    }
    if (totals < 20){
      billTotal.classList.remove("warning");
    }
    if (totals < 25){
      billTotal.classList.remove("danger");
    }
  }

//Logic function
function totalPhoneBill(totalData){
  var data = totalData.split(',');
  var total = 0;
  for (var i=0; i<data.length;i++){

      if (data[i] === 'call'){
        total += 2.75;
        console.log(total);
    }
    else if (data[i] === 'sms'){
      total += 0.75;
      console.log(total);
    }
  }
  return total.toFixed(2);
}

calculateBtn.addEventListener('click', calculateBill);
