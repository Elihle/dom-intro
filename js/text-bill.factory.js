var billTypeText = document.querySelector(".billTypeText");
var addToBillBtn = document.querySelector(".addToBillBtn");
var callTotalOne = document.querySelector(".callTotalOne");
var smsTotalOne = document.querySelector(".smsTotalOne");
var totalOne = document.querySelector(".totalOne");
var refFactory = Factory();

addToBillBtn.addEventListener('click', function() {
  Factory();
  textBill();
});

function textBill() {
  var textB = billTypeText.value;
  refFactory.billTotals(textB);
  callTotalOne.innerHTML = refFactory.allCalls().toFixed(2);
  smsTotalOne.innerHTML = refFactory.allSms().toFixed(2);
  totalOne.innerHTML = refFactory.grandTotal().toFixed(2);

  if (refFactory.grandTotal() >= 30) {
    totalOne.classList.add("warning");
  }
  if (refFactory.grandTotal() >= 50) {
    totalOne.classList.add("danger");
  }

  if (refFactory.grandTotal() < 20) {
    totalOne.classList.remove("warning");
  } else if (refFactory.grandTotal() < 50) {
    totalOne.classList.remove("danger");

  }
}
