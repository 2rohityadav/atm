import { ERROR_TYPES } from './constants/ErrorTypes';
import NoteUnavailableException from './classes/NoteUnavailable';
import InvalidArgumentException from './classes/InvalidArgument';

function widthdrawMoney(value = 0){
  console.info(value);
  const money = [100,50,20,10];
  let sets = [];
  try {
    if( value === 0 || value === null ) return sets;

    if( value < 0 ) throw new InvalidArgumentException(ERROR_TYPES.NEGATIVE);

    if(isNaN(value)) throw new InvalidArgumentException(ERROR_TYPES.NAN);

    if(value % money[money.length-1] !== 0) throw new NoteUnavailableException(ERROR_TYPES.NOT_AVAILABLE);

    if(!Number.isInteger(value)) throw new NoteUnavailableException(ERROR_TYPES.CENTS);

    for(let i = 0; value > 0; i++) {
      if( money[i] <= value ){ // First check to ignore notes that are bigger than amount requested
        value = value % money[i];
        sets.push(money[i]); // Store banknotes to withdraw
      }
    }

    return sets;
  }
  catch(err) {
    return err;
  }
}

console.info(widthdrawMoney(30));
console.info(widthdrawMoney(80));
console.info(widthdrawMoney(125));
console.info(widthdrawMoney(-130));
console.info(widthdrawMoney(null));
console.info(widthdrawMoney('foo'));
