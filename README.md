## CASH MACHINE

### The Problem
Develop a solution that simulate the delivery of notes when a client does a withdraw in a cash machine.
The basic requirements are the follow:

* Always deliver the lowest number of possible notes;
* It’s possible to get the amount requested with available notes;
* The client balance is infinite;
* Amount of notes is infinite;
* Available notes $ 100,00; $ 50,00; $ 20,00 and $ 10,00

Example:
```javascript
Entry: 30.00
Result: [20.00, 10.00]

Entry: 80.00
Result: [50.00, 20.00, 10.00]

Entry: 125.00
Result: throw NoteUnavailableException

Entry: -130.00
Result: throw InvalidArgumentException

Entry: NULL
Result: [Empty Set]
```

### The solution
* Created a `constant` with the available notes. Used a constant for this because the amount of notes is infinite. If the amount of notes was not infinite, it would require a `constant` to save the default notes and a `variable` that can be reassigned once the quantity of the selected note is decreased. I would use an `Object` to store the notes and quantities;
* Created `Exceptions` extending `Error` builtin type to allow custom Error type like the requirements mentioned above. Once code was ported to a Node.JS application I ran into some issues with Babel parser but it was fixed changing versions.
* Created a `function` to iterate trough notes constant and added a condition to check if the notes are lower than amount requested.
* Reasigns amount remainder and pushes notes that are matching into `sets` `Array`. In this loop it is not necessary to check if there's a remainder value that doesn't have a note because this is checked before reacing the loop comparing the amount desired with the lowest value available (line 18). When values are null it returns an empty array instead of `Empty Set`.
* Added colors module to format console output.
* Added pretty-error module to format error messages.

## Usage

* `npm install` to install required dependencies
* `npm run dev` to start and run `nodemon` watching for changes in `src/app.js` file. Press `control + c` to abort.
* `npm run build` to build files in `dist` folder.
* `npm start` to start application and run values in the requirements section.
* `npm test` to run mocha unit tests.
* `npm run clean` to clean up `dist` folder.

