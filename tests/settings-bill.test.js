describe("billSettings", function(){

  it("Updates the value of one call then returns the total amount", function(){
    var billSets = SettingsWithBill();
    billSets.setCostSms(0.75);
    billSets.setCritical(20);
    billSets.billSettings('sms', 'sms');
    assert.equal(0.75, billSets.getSms());
  });


    it("Updates the value of one call then returns the total amount", function(){
      var billSets = SettingsWithBill();
      billSets.setCostCall(35);
      billSets.setCritical(40);
      billSets.billSettings('call');
      assert.equal(35, billSets.getCall());
    });

    it("Updates the value of two calls then returns the total amount", function(){
      var billSets = SettingsWithBill();
      billSets.setCostCall(35);
      billSets.setCritical(40);
      billSets.billSettings('call','call');
      assert.equal(35, billSets.getCall());
    });


});
