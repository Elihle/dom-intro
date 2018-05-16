var calculateBtn = document.querySelector(".calculateBtn");
var billTotal = document.querySelector(".billTotal");
var billString = document.querySelector(".billString");

// Dom function
function calculateBill() {
  var totalData = billString.value;
  var totals = totalPhoneBill(totalData);

  billTotal.innerHTML = totals;
  if (totals >= 20) {
    billTotal.classList.add("warning");
  }
  if (totals >= 30) {
    billTotal.classList.add("danger");
  }
  if (totals < 20) {
    billTotal.classList.remove("warning");
  }
  if (totals < 25) {
    billTotal.classList.remove("danger");
  }
}
calculateBtn.addEventListener('click', calculateBill);
