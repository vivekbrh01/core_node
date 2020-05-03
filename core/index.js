//1. this is how most of javascript codes are executed which are present 
// in a file or in entire project.
console.log('hello World');

//4. Read file(theory.md) here using fs module and console the results of operation.

const fs = require('fs');

fs.readFile('./theory.md', 'utf-8', (err, data) => {
  if(err) throw err;
  console.log(data);
});

//6. Blocking code
 // Run it first and observe the output
const fs = require('fs');
var file = fs.readFileSync('./theory.md');
console.log(file);
console.log('run me first');

// The output  is 
    //  <Buffer> 
    //  run me first
    

 // change it to run it in non-blocking manner.
 // Observe the difference in blocking and non-blocking code. 

var file = fs.readFile('./theory.md', 'utf-8', (err, data) => {
  console.log(data);
});
console.log(file);
console.log('run me first');

// Output is 
    // undefined
    // run me first
    // The data of the theory.md file
    
// 10. require math.js
  // console const pie and add and multiply function.

const {pie, sum, mult} = require("./math");

console.log(pie);

console.log( sum(2, 3) );

console.log( mult(2, 5) );