function Factory(){
  var call = 0;
  var sms = 0;
  var total = 0;

function textBillTotal(totalData){
  if (totalData === 'call'){
  call += 2.75;
  }
  if (totalData === 'sms'){
  sms += 0.75;
 }

total = call + sms;
}

function getCall(){
  return call;
}
function getSms(){
  return sms;
}
function getTotal(){
  return total;
}

return {
  billTotals : textBillTotal,
  allCalls : getCall,
  allSms : getSms,
  grandTotal : getTotal
}
}
