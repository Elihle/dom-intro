describe("radioBillTotal", function(){

  it("Calculates and returns the total amount of one call", function(){
  var Factories1 = Factories();
  Factories1.allC(2.75);
  Factories1.billT('call');
  assert.equal(2.75, Factories1.allC());
  });

  it("Calculates and returns the total amount of one sms", function(){
  var Factories1 = Factories();
  Factories1.allS();
  Factories1.billT('sms');
  assert.equal(0.75, Factories1.allS());
  });
});
