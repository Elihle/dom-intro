describe("billSettings", function() {

  it("Updates the value of three sms then returns the total amount", function() {
    var billSets = SettingsWithBill();
    billSets.setCostSms(0.75);

    billSets.setCritical(15);
    billSets.setWarning(5);
    billSets.billSettings('sms');
    billSets.billSettings('sms');
    billSets.billSettings('sms');
    assert.equal(2.25, billSets.getSms());
  });

  it("Updates the value of two calls then returns the total amount", function() {
    var billSets = SettingsWithBill();
    billSets.setCostCall(2.75);

    billSets.setCritical(12);
    billSets.setWarning(8);

    billSets.billSettings('call');
    billSets.billSettings('call');
    assert.equal(5.50, billSets.getCall());
  });

  it("Updates the value of one call and one sms then returns the total amount", function() {
    var billSets = SettingsWithBill();
    billSets.setCostCall(2.75);
    billSets.setCostSms(0.75);
    billSets.totalBills(3.50);

    billSets.setCritical(10);
    billSets.setWarning(5);

    billSets.billSettings('call');
    billSets.billSettings('sms');
    assert.equal(2.75, billSets.getCall());
    assert.equal(0.75, billSets.getSms());
    assert.equal(3.50, billSets.totalBills());
  });
});
