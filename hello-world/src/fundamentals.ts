let sales = 123_456_789; //infers type number
let course = "typescript"; //infers type string
let isPublished = true; //infers type boolean
let level; //assumes type any

function render(document: any) {
  console.log(document);
}
