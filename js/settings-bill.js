
function SettingsWithBill(){
  var callB = 0;
  var smsB = 0;
  var totalB = 0;
  var callCost = 0;
  var smsCost = 0;
  var warningB = 0;
  var criticalB = 0;

function billSettings(billSetting){

  if(totalBills()<criticalB){
    var billItemTypeWithSettings = billSetting;

    if(billItemTypeWithSettings === 'call'){
      callB += callCost;
    }

    if(billItemTypeWithSettings === 'sms'){
    smsB += smsCost;
    }
  }
}

//returns
function getCall(){
    return callB;
}

function getSms(){
    return smsB;
}
function getCritical(){
    return criticalB;
}
function getWarning(){
    return warningB;
}

function totalBills(){
  return  callB + smsB;
}

//setters
function setCostCall(value){
  callCost = parseFloat(value);
}

function setCostSms(value){
  smsCost = parseFloat(value);
}

function setWarning(value){
  warningB = parseFloat(value);
}

function setCritical(value){
  criticalB = parseFloat(value);
}

return {
  totalBills,
  billSettings,
  setCostCall,
  setCostSms,
  setCritical,
  setWarning,
  getCall,
  getSms,
  getWarning,
  getCritical
  }
}
var refFactor =  SettingsWithBill();
