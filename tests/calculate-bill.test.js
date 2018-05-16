describe('totalPhoneBill', function() {
  it('Calculate the total for two calls & one sms then display the amount', function() {
    assert.equal(totalPhoneBill('call,sms,call'), 6.25);
  });

  it('Calculate the total for three calls and two sms then display the amount', function() {
    assert.equal(totalPhoneBill('call,sms,sms,call,call'), 9.75);
  });

  it('Calculate the total for one call and one sms then display the amount', function() {
    assert.equal(totalPhoneBill('call,sms'), 3.50);
  });
});
