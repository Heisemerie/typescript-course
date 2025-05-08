//Intoduction
//What are decorators
//Class decorators
//Method decorators
//Property decorators
//Accessor decorators
//Parameter decorators

//What are decorators?
//Decorators are attributes you can add to classes and their members to change how they behave
//TS does not have any built-in decorators
//Under the hood decorators are functions that get called by the JS runtime, it passes the class to the function
//In that function we can modify the class; we can add new properties, methods or change the implementation of existing methods
//To create decorators, we have to enable a special compiler feature; "experimentalDecorators"

//Class decorators
function Component(constructor: Function) {
  console.log("Component decorator called");
  constructor.prototype.uniqueId = Date.now();
  constructor.prototype.insertInDOM = () =>
    console.log("Inserting the component in the DOM");
}

@Component
class ProfileComponent {}
