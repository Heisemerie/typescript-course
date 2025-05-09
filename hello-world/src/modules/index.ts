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
