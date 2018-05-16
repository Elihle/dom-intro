function Factories() {
  var callA = 0;
  var smsA = 0;
  var totalA = 0;

  function radioBillTotal(totalD) {
    if (totalD === 'call') {
      callA += 2.75;
    } else if (totalD === 'sms') {
      smsA += 0.75;
    }

    totalA = callA + smsA;
  }

  function getCalls() {
    return callA;
  }

  function getSmss() {
    return smsA;
  }

  function getTotalA() {
    return totalA;
  }

  return {
    billT: radioBillTotal,
    allC: getCalls,
    allS: getSmss,
    grandT: getTotalA
  }

}
