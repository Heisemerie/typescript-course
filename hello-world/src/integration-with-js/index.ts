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

//Creating Declaration files
//we have another way of providing type information and that's using a declaration or type definition file
//it is used if you don't want to modify your JS code and add JSDoc comments
//first we create a file 'tax3.d.ts', the name of the file should be the same as the corresponding JS file, 'd' is short for declaration
//in the declaration file we declare all the features of the target module 'tax3.js'
import { calculateTax3 } from "./tax3";
let tax3 = calculateTax3(1500); //we get TS compilation errors
console.log(tax3);
//when using this approach you should describe all the features in the target module.
//Anything you don't describe would be invisible to the compiler (eg exports)

//Using Definitely Typed Declaration files
//let's talk about using thrid party JS libraries in our TS project
//we install 'Lodash' (utility library)
import * as _ from "lodash"; //we get an initial error because lodash is a pure JS library (it does't have JSDocs comments or declaration files)
//in this case we use a very popular GitHub repository called DefinitelyTyped
// in this repo we can find the declaration files for all the popular JS libraries
//we install using 'npm i -D @types/lodash'
_.clone([1, 2, 3]); //her we have type annotation
//most libraries come with declaration files, so we don't need to install them seperately from the Definitely Typed library
//for example let's install 'chalk' library
//in 'src/node_modules/chalk/source' there's an index.d.ts declaration file 
