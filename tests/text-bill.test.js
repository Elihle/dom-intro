describe("textBillTotal", function(){

    it("calculates the value of one call", function(){
    var Factory1 = Factory();
    Factory1.allCalls();
    Factory1.billTotals('call');
    assert.equal(2.75, Factory1.allCalls());

  });
  it("calculates the value of one sms", function(){
  var Factory1 = Factory();
  Factory1.allSms();
  Factory1.billTotals('sms');
  assert.equal(0.75, Factory1.allSms());

});
  });
