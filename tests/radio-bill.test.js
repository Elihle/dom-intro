describe("radioBillTotal", function() {

  it("Calculates and returns the total amount of two calls", function() {
    var radioBills = Factories();
    radioBills.allC(2.75);
    radioBills.billT('call');
    radioBills.billT('call');
    assert.equal(5.50, radioBills.allC());
  });

  it("Calculates and returns the total amount of two sms", function() {
    var radioBills = Factories();
    radioBills.allS(0.75);
    radioBills.billT('sms');
    radioBills.billT('sms');
    assert.equal(1.50, radioBills.allS());
  });

  it("Calculates and returns the total amount of two calls and one sms", function() {
    var radioBills = Factories();
    radioBills.allS(0.75);
    radioBills.allC(2.75);
    radioBills.billT('sms');
    radioBills.billT('call');
    radioBills.billT('call');
    assert.equal(0.75, radioBills.allS());
    assert.equal(5.50, radioBills.allC());
  });
});
