//Logic function
function totalPhoneBill(totalData) {
  var data = totalData.split(',');
  var total = 0;
  for (var i = 0; i < data.length; i++) {

    if (data[i] === 'call') {
      total += 2.75;
      console.log(total);
    } else if (data[i] === 'sms') {
      total += 0.75;
      console.log(total);
    }
  }
  return total.toFixed(2);
}
