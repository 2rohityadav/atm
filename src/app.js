import CashMachine from './classes/CashMachine';

let w30 = new CashMachine();
let w80 = new CashMachine();
let w125 = new CashMachine();
let wNegative = new CashMachine();
let wNull = new CashMachine();
let wString = new CashMachine();

console.info(w30.withdrawMoney(30));
console.info(w80.withdrawMoney(80));
console.info(w125.withdrawMoney(125));
console.info(wNegative.withdrawMoney(-130));
console.info(wNull.withdrawMoney(null));
console.info(wString.withdrawMoney('foo'));
