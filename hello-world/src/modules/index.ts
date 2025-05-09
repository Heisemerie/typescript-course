//Introduction
//Creating and using modules
//Module formats (how to configure the TSC to generate code for different formats)
//Default exports
//Wildcard imports
//Re-exporting

//Exporting and Importing
//so far we've written all the code in just one file
//to ease maintenance we split our code into separate files or modules each serving a purpose
//we move classes 'Circles' and 'Squares' into a new file called 'shapes.ts'
//then we export them from the module and import them here
import { Circles as Circle } from "./shapes"; //while importing we can optionally rename it using the 'as' keyword

let circle = new Circle(1);
console.log(circle.radius);

//Module formats
//In the old days JS didn't have a module format
//Starting with ES2015 modules have become natively supported in JS
//let's explore other module formats for familiarity (they are not used anymore)
//we modify the compiler option in the tsconfig modules section

//Default exports
//sometimes we just want to export a single thing from a module
//in that case it is better to use a default export
import Stores, { Format } from "./storage";
let stores = new Stores();
//default exxports can exist with named exports

//Wildcard Imports
//sometimes we need quite a few objects from a module
import * as Shapes from './shapes' //use an asterisk to import everything at once
Shapes.Squares

//Re-exporting
//with re-exporting we can have a single module combine the export of different modules
import {Toyota, Volvo} from './cars'