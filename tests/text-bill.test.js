describe("textBillTotal", function() {

  it("calculates the cost of one call", function() {
    var textBills = Factory();
    textBills.allCalls();
    textBills.billTotals('call');
    assert.equal(2.75, textBills.allCalls());
  });

  it("calculates the cost of one sms", function() {
    var textBills = Factory();
    textBills.allSms();
    textBills.billTotals('sms');
    assert.equal(0.75, textBills.allSms());
  });

  it("calculates the cost of one call and one sms", function() {
    var textBills = Factory();
    textBills.allCalls();
    textBills.billTotals('call');
    textBills.billTotals('sms');
    assert.equal(2.75, textBills.allCalls());
    assert.equal(0.75, textBills.allSms());
  });
});
