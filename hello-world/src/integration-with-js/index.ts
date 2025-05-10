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