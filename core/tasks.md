1. Explain Node and V8 in your own words ? 
// Answer : 
    V8 is an engine developed by Google that executes JavaScript code. It is written in C++ and implements      ECMAScript specifications. It is used in Chrome and Node.js

2. Explain steps in REPL(here) and command to start REPL ?
// Answer : 
    Steps in REPL are: 
    1. First we open the terminal.
    2. We start REPL by entering the comman `node` in the terminal.
    3. Then a `>` appears in the terminal window indicating that we have entered the REPL mode. Now we are ready to execute commands in the terminal window.

3. Run `index.js` in the same directory as script writer using `node FILE_NAME.js` and output result of console here.
// Answer:
    The output is `hello world`

4. Require fs module and read `theory.md` using fs.readFile method in index.js file.
//Answer :  Completed in `index.js` file.

5. Explain Buffer and different methods to create a buffer ?
// Answer : 
    Buffer is a small physical location in the RAM, where the incoming data is temporarily gathered, wait and eventually sent out for processing.
    There are different methods to create a buffer: 
      1. An empty buffer can be created of any size with the command : `const buf1 = Buffer.alloc(20);` This gives us a buffer of size 20 bytes.
      2. We can also create a buffer with content with the command : `const buf2 = Buffer.from("hello buffer");`

6. What is blocking code ? How is it different from non-blocking/async codes ? Correct blocking code in index.js to run asynchronously ?
// Answer :
      Blocking code a piece of code that runs synchronously. While executing that line of code the process waits until it is completed before moving on to the next line of code. 
      
      Blocking vs Non-blocking code
      A blocking code is executed line by line, one line at a time. Every time a function is called, the program execution waits until that function returns before continuing to the next line of code.

      Non-blocking code is not executed in the sequence it appears in the code. The program doesn’t wait for the task to complete and can move on to the next task.

      Task completed in `index.js` file.
  
7. Request from browser `https://altcampus.io` and copy request, response and general headers into answer.js.
// Answer : Completed in `answer.js` file

8. Parse the URL `http://localhost:3000/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4` using `url` module's parse method and write output in answer.js
// Answer : Completed in `answer.js` file

9. parse the query object as well from above url using `url.parse(url, true)` and output result in answer.js
// Answer : Completed in `answer.js` file
10. create a file `math.js`
  1. Export variables and functions
    - define a const pie = 3.14
    - define functions to add and multiply 2 numbers
    - export it from math.js
    - require in index.js and console the output by executing it there.
```js
// math.js
const pie = 3.14;
function sum() {}
function multiply() {}
// export it from math.js
```

  2. Define above const and functions as properties and methods on module.exports object.
    - require in index.js and execute it.

```js
  module.exports = {
    pie: 3.14,
    add: () => {}
  }
```
  3. Define above using exports 

```js
exports.sum = () => {}
```
