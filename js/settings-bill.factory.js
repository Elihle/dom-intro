var billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");

var callCostSettings = document.querySelector(".callCostSetting");
var smsCostSettings = document.querySelector(".smsCostSetting");
var warningLevelSettings = document.querySelector(".warningLevelSetting");
var criticalLevelSettings = document.querySelector(".criticalLevelSetting");

var callTotalSetting = document.querySelector(".callTotalSettings");
var smsTotalSetting = document.querySelector(".smsTotalSettings");
var totalSettings = document.querySelector(".totalSettings");
var totalAmountBtn = document.querySelector(".totalAmountBtn");
var updateSetting = document.querySelector(".updateSettings");

//updates
function updateSettings() {
  refFactor.setCostCall(callCostSettings.value);
  refFactor.setCostSms(smsCostSettings.value);
  refFactor.setCritical(criticalLevelSettings.value);
  refFactor.setWarning(warningLevelSettings.value);
}

function domFunction() {
  var billSettings = document.querySelector("input[name='billItemTypeWithSettings']:checked");

  if (billSettings) {

    refFactor.billSettings(billSettings.value);

    callTotalSetting.innerHTML = refFactor.getCall().toFixed(2);
    smsTotalSetting.innerHTML = refFactor.getSms().toFixed(2);
    var totalBill = refFactor.totalBills().toFixed(2);
    totalSettings.innerHTML = totalBill;


    if (totalBill < refFactor.getWarning()) {
      totalSettings.classList.remove("warning");
      totalSettings.classList.remove("danger");

    }
    if (totalBill >= refFactor.getWarning() && totalBill < refFactor.getCritical()) {
      totalSettings.classList.remove("danger");
      totalSettings.classList.add("warning");
    }
    if (totalBill >= refFactor.getCritical()) {
      totalSettings.classList.remove("warning");
      totalSettings.classList.add("danger");
    }
  }
}

updateSetting.addEventListener('click', updateSettings);
totalAmountBtn.addEventListener('click', domFunction);
