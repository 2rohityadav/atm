let chai = require('chai'),
  path = require('path');

chai.should();

let CashMachine = require(path.join(__dirname, '..', 'src/classes/CashMachine'));

describe('Cash Machine app', () => {
  it('should return [20,10]', done => {
    let w30 = new CashMachine();
    w30.withdrawMoney(30).should.equal([20,10]);
    done();
  });

  it('should return [50,20,10]', done => {
    let w30 = new CashMachine();
    w30.withdrawMoney(80).should.equal([50,20,10]);
    done();
  });
});

