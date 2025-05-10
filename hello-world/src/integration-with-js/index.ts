//Introduction
//Including JS code in TS projects
//Type checking JS code using;
//JS docs and
//Declaration (Type Definition)
//Using declaration files from @types/

//Including JS code in TS projects
//you might be working with JS and want to include TS later on or you might be working on an existing JS code
//let's create a JS file called tax.js and import it
import { calculateTax } from "./tax"; //the TSC cannot see our tax.js module. Turn on 'allowJS' in tsconfig.json
//change the module option in tsconfig to "CommonJS" for imports to work
const tax = calculateTax(5000);
console.log(tax);

//Type-checking JS code
//when using JS code we don't get type checking and we don't see errors until runtime
//turn on "checkJS" to get some basic type checking
//the type of 'income' in calculateTax is 'any' therefore TSC won't throw errors for the wrong input type

//Describing Types using JSDoc
//one way to describe types to TSC is using JSDoc which is a special type of comment we can add to JS code (in tax.js)
import { calculateTax2 } from "./tax2";
const tax2 = calculateTax2(1000); //we get TS compilation errors
console.log(tax2);
