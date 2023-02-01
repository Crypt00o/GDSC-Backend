## Session4 - Node Js  Components:[ Globals , REPL, Core Modules , Event Loop - part1 ]   


## Contents 

1. [NodeJs Internals](#nodejs-internals)
2. [How NodeJs Single-Threaded ? ](#nodejs-is-single-threaded)
3. [REPL](#nodejs-repl)
4. [Globals](#nodejs-globals)

	  1. [Proccess](#1-process)
	  2. [Buffer](#2-buffer)
	  3. [Console](#3-console)
	  4. [Timers](#4-timeout-functions) 
	  5. [Immediate Functions](#5-immediate-functions)
	  6. [Interval Timers](#6-interval-functions)
	  7. [Global](#7-global)
	  8. [Module](#8-module)
	  9. [Filename / Dirname](#9-filename-dirname)

5. [Core Modules](#nodejs-built-in-modules)
6. [Event Emitter](#eventemitter)
7. [Event-Loop](#event-loop-the-heart-of-nodejs)

## NodeJs Internals 


- Node.js is an open-source, cross-platform JavaScript runtime environment built on Chrome's V8 JavaScript engine. Its internal architecture is based on an event-driven, non-blocking I/O model.

Here are some key components of Node.js internals:

1. V8 JavaScript Engine: This is the core component of Node.js and is responsible for executing JavaScript code. It compiles the JavaScript code into machine code for faster execution.

2. libuv: This is a multi-platform support library that provides core asynchronous I/O functionality to Node.js. It abstracts platform-specific APIs, making it easier to write cross-platform code.

3. Event Loop: This is the heart of Node.js and is responsible for handling asynchronous I/O operations. It processes events in the queue and executes their associated callbacks.

4. Event Emitter: This is a pattern used in Node.js to emit events to listeners. It is widely used to build reusable components.

5. Streams: This is a way of handling data in Node.js, allowing it to be read from or written to in a continuous manner.

6. Buffers: This is a data type in Node.js used to store raw data in memory. They are used to temporarily store data before it is sent to its destination.

7. Modules: This is a way to organize code in Node.js, allowing developers to break their applications into smaller, reusable components.

8. Package Manager: This is the tool used to manage packages in Node.js. npm is the most widely used package manager for Node.js.


9. Cluster: This is a feature in Node.js that allows for horizontal scaling, allowing a single Node.js process to use multiple CPU cores.

10. Workers: These are child processes created by a cluster, allowing for multiple Node.js processes to run in parallel, effectively increasing the performance of the application.

11.  Global Objects: These are objects that are available in the global scope of a Node.js application. Some of the most commonly used global objects include process, console, module, and exports.

12. REPL (Read-Eval-Print Loop): This is a command-line interface provided by Node.js for testing and debugging purposes. It allows developers to execute JavaScript code and see the results immediately.

13. Debugger: This is a built-in tool in Node.js that allows developers to debug their code. It can be used through the REPL or through a separate debugger tool.

14. Native Add-ons: These are Node.js modules written in C or C++, allowing for low-level system access. They are used to extend the functionality of Node.js, or to provide performance-critical functionality.

- In summary, these are some of the key components of Node.js internals that make it a powerful and efficient platform for server-side web development.

---

## NodeJs is Single Threaded 

#### How  NodeJs is Single Threaded ?

- Node.js uses a single thread, known as the "event loop", to execute JavaScript code. This means that all JavaScript code runs in a single process, in a single thread, and in a single call-stack, making it easier to reason about and debug.

- However, Node.js uses multiple threads internally to handle I/O operations asynchronously. This is done through its libuv library, which abstracts away the underlying operating system's I/O functions and provides a non-blocking, event-driven I/O API for Node.js to use. When an I/O operation is initiated, the event loop continues to execute other JavaScript code, rather than blocking and waiting for the operation to complete. Once the operation has completed, a callback function is triggered, and the results of the operation are processed.

- This combination of a single-threaded JavaScript execution environment and efficient, non-blocking I/O operations provides a high level of performance and scalability, while also keeping the code easy to reason about and debug. It is one of the key reasons why Node.js has become so popular for server-side web development and other I/O-bound applications.

<br>

---

<br>

## Nodejs REPL 

- REPL stands for Read-Eval-Print-Loop, which is a command-line interface for Node.js. It provides a way for developers to interact with Node.js by typing JavaScript code into the terminal and seeing the results immediately.

- In the Node.js REPL, you can:

1. Enter JavaScript expressions and see their results immediately.
2. Access predefined global variables such as `process` and `console`.
3. Load and run Node.js modules by using the `require` function.
4. Use multi-line expressions by wrapping the code in parentheses, curly braces, or backticks.

5. Exit the REPL by typing `.exit` or pressing Ctrl + C twice.


- In addition to the basic features, the Node.js REPL also provides a number of commands for managing the REPL environment. Some of the most commonly used REPL commands are:

1. `.help` : Displays a list of all available REPL commands.
2. `.break` : Exits from a multi-line expression.
3. `.clear` : Clears the REPL context, effectively resetting it to a clean state.
4. `.save` : Saves the current REPL session to a file.
5. `.load` : Loads a previously saved REPL session.

- The Node.js REPL is a versatile tool that can be used for a variety of tasks, from quick experimentation to debugging complex applications. By leveraging its features and commands, developers can work more efficiently and effectively within the Node.js environment.
- The Node.js REPL can be useful for testing JavaScript code snippets, exploring the Node.js API, and debugging your applications. It is also a great tool for learning the basics of JavaScript and Node.js, as you can experiment with the language and see the results of your code immediately.

<br>

---

<br>


## NodeJs Globals

- The following are the built-in global objects in Node.js:
<br><br>
1. `process`: provides information on the current Node.js process.
2. `Buffer`: a global object for handling binary data.
3. `console` : provides methods for logging information.
4. `setTimeout` and `clearTimeout`: set and clear a timer for a function to be executed after a specified number of milliseconds.
5. `setInterval` and `clearInterval`: repeatedly set and clear a timer for a function to be executed after a specified number of milliseconds.
6. `setImmediate` and `clearImmediate`: set and clear a timer for a function to be executed as soon as possible.
7. `global` : a global object that can be used to store global variables.
8. `module` : a global object that represents the current module.
9. `exports` : an object that can be used to export values from a module.
10. `require` : a function that can be used to import values from other modules
11. `__filename` and `__dirname` : global constants that represent the absolute file path and directory path of the current file.

<br><br>  

- These global objects can be used in any module without the need for importing or exporting.

## 1. process


- The `process` in Node.js is a global object that provides information about, and control over, the current Node.js process. Here are some key properties and methods of the process object:

1. `process.argv`: An array containing the command-line arguments passed when starting the Node.js process.

2. `process.env`: An object containing the user environment.

3. `process.cwd()`: Returns the current working directory of the process.

4. `process.exit([code])`: Ends the process with the specified exit code.

5. `process.pid`: The process id of the process.

6. `process.memoryUsage()`: Returns an object describing the memory usage of the process.

7. `process.nextTick(callback)`: Schedules the callback function to be called on the next iteration of the event loop.

8. `process.versions`: An object that reports the version numbers of Node.js and its dependencies.
9. `process.stdout`: A Writable Stream representing the stdout stream.

10. `process.stderr`: A Writable Stream representing the stderr stream.

11. `process.stdin` : A Readable Stream representing the stdin stream.

<br><br>

- This is just a brief overview of the process object i provide to you in my session . To learn more, you can check out the official Node.js documentation: https://nodejs.org/docs/latest/api/process.html


--- 

## 2. Buffer

- The `Buffer` class in Node.js is a global object that allows one to work with binary data. Here are some key properties and methods of the Buffer class:

1. `Buffer.from(array)`: Creates a new Buffer that contains a copy of the given data.

2. `Buffer.alloc(<size:number>, <fillValue:number>, <encoding:string>)`: Allocates a new buffer of size and with the given encoding.

3. `Buffer.allocUnsafe(<size:number>)` : Allocates a new buffer of size and returns it without initialization.

example of decalreing Raw Buffer  : 

```
let buf = Buffer.from(" Hello Every One ")
``` 

4. `buf.length` : The size of the buffer in bytes.

5. `buf.toString(<encoding:string>, <start:index number>, <end:index number>)` : Converts the buffer's data to a string with the given encoding.

6. `buf.write(<data:string> , <offset:number>, <length:number>, <encoding:string>)` : Writes string to the buffer at offset using the given encoding.


7. `buf.copy(targetbuf, <targetbufStart: index number>, <sourcebufStart:index number>, <sourceEnd:index number>)` : Copies data from a buffer to another buffer.
```
let buf = Buffer.from(" Hello Every One ")

let anotherBuf = Buffer.from(" Iam Another Binary Representation  of Some Data      ")

buf.copy(anotherBuf,37,0,16)

buf.copy(anotherBuf , anotherBuf.length-buf.length  , 0 ,buf.length-1)
```


8. `buf.slice(<start:index number>, <end:index number> )` : Returns a new buffer that references the same memory as the original, but contains a subset of the data.

9. `buf.compare(otherBuffer)`: Compares two Buffers and returns a number indicating their sort order.

- This is just a brief overview of the Buffer class that i provide to you in my session . To learn more, you can check out the official Node.js documentation: https://nodejs.org/docs/latest/api/buffer.html


---


## 3. Console 

-The console object in Node.js is a global object that provides simple logging and debugging capabilities. Here are some key methods of the console object:

1. `console.log([data][, ...args])`: Prints the arguments to the console and adds a newline character at the end.
2. `console.error([data][, ...args])`: Similar to console.log, but writes the output to stderr.
3. `console.warn([data][, ...args])`: Similar to console.error, but writes the output to stderr.
4. `console.info([data][, ...args])`: Similar to console.log, but writes the output to stdout.
5. `console.debug([data][, ...args])`: Similar to console.log, but writes the output to stdout.
6. `console.dir(obj, {depth:number})`: Writes a stringified representation of obj to the console, including non-enumerable properties and symbol properties.
7. `console.time(label)`: Starts a timer with the given label.
8. `console.timeEnd(label)`: Stops the timer with the given label and prints the elapsed time.
9. `console.trace([message])`: Writes a stack trace to the console.
10. `console.assert(expression, message)`: Writes an error message to the console if the expression evaluates to false.

- This is just a brief overview of the console object.  To learn more, you can check out the official Node.js documentation: https://nodejs.org/docs/latest/api/console.html


---

## 4. Timeout Functions

- setTimeout and clearTimeout are global functions in Node.js that allow you to execute a callback function after a specified amount of time has elapsed. Here is a brief explanation of each:

1. `setTimeout(callback, delay[, ...args])`: Schedules the callback function to be executed after delay milliseconds. It returns a timeoutId that can be used to clear the timeout using clearTimeout.
2. `clearTimeout(timeoutId)` : Cancels a timeout previously created by setTimeout. The timeoutId argument is the value returned from the setTimeout function.

- Here is an example usage of setTimeout and clearTimeout:

```
let timeoutId = setTimeout(() => {
  console.log('Timeout has expired!');
}, 5000);

clearTimeout(timeoutId);
```
In this example, the timeout would have printed the message "Timeout has expired!" after 5 seconds, but it was cleared using clearTimeout before that could happen.

- Note that setTimeout and clearTimeout are part of the JavaScript standard, not just Node.js, and are available in all modern web browsers.


---

## 5. Immediate Functions

- setImmediate and clearImmediate are global functions in Node.js that allow you to execute a callback function as soon as possible after the current event loop has completed. Here is a brief explanation of each:

1. `setImmediate(callback[, arg][, ...])`: Schedules the callback function to be executed as soon as possible after the current event loop has completed. It returns an immediateId that can be used to clear the immediate using clearImmediate.
2. `clearImmediate(immediateId)`: Cancels an immediate previously created by setImmediate. The immediateId argument is the value returned from the setImmediate function.

example : 
```
let immediateId = setImmediate(() => {
  console.log('Immediate has been executed!');
});

clearImmediate(immediateId);
```

In this example, the immediate would have printed the message "Immediate has been executed!" as soon as possible after the current event loop has completed, but it was cleared using `clearImmediate` before that could happen.

- Note that `setImmediate` and `clearImmediate` are specific to Node.js and not part of the JavaScript standard. They are used to schedule callbacks that need to be executed as soon as possible, but are not as time-critical as timeouts scheduled using setTimeout.

---
## 6. Interval Functions

1. `setInterval` is a global function in Node.js that allows you to run a function repeatedly, with a specified delay between each execution. The syntax for `setInterval` is as follows:


- `setInterval(callback, delay[, arg][, ...]);`
`callback`: The function to be executed repeatedly.
`delay`: The time in milliseconds to wait between each execution of the callback function.
`arg` (optional): Additional arguments to pass to the callback function.

- `setInterval` returns a unique interval ID that can be used to cancel the interval using the `clearInterval` function.

Here's an example of how you might use `setInterval` to print "Hello, world!" every second:

```
setInterval(function() {
  console.log("Hello, world!");
}, 1000);
```

- To cancel an interval, you can use the `clearInterval` function, which takes the interval ID returned by `setInterval` as an argument:

```
const intervalId = setInterval(function() {
  console.log("Hello, world!");
}, 1000);

clearInterval(intervalId);
```
In this example, the interval is cancelled by calling clearInterval and passing it the intervalId returned by setInterval.

- Note that setInterval and clearInterval are not exact and the actual interval between executions may vary depending on the performance of your system and other processes running on your machine. However, they provide a convenient way to run a function repeatedly at a specified interval.


---

## 7. Global 

- In Node.js, `global` is a reference to the global object. It is a reference to the top-level context in which your JavaScript code is executed, and it serves as a container for global variables and functions.

Some common properties and methods of the global object in Node.js include:

1. `process`: An object that provides information about the current Node.js process.
2. `Buffer`: A class for working with binary data in Node.js.
3. `setTimeout` and `clearTimeout`: Functions for scheduling and cancelling timeouts.
4. `setImmediate` and `clearImmediate`: Functions for scheduling and cancelling immediates.
5. `console`: An object that provides simple logging and debugging capabilities.

<br><br>

- In addition to these built-in properties and methods, you can also define your own global variables and functions, but it is generally recommended to avoid doing so and instead use module exports and require to manage dependencies and encapsulate state.

- It's important to note that the `global` object in Node.js is different from the `window` object in the browser, which serves as the global object in web pages. If you're used to writing JavaScript for the browser, be aware that some familiar properties and methods may not be available on the `global` object in Node.js.


---

## 8. Module

- In Node.js, a `module` is a reusable piece of code that can be included in other files using the require function. Modules provide a way to organize your code into smaller, more manageable pieces, and to encapsulate state and functionality so that it can be reused and composed in different parts of your application.

- Each module in Node.js is defined in its own file and has its own isolated scope, which means that variables and functions declared within a module are not accessible from outside the module unless they are explicitly exported. Modules can be thought of as objects with properties and methods, and exports are used to define the properties and methods that are available for use outside of the module.

- Here's a simple example of a module in Node.js:

```
// myModule.js
let message = 'Hello, world!';

function sayHello() {
  console.log(message);
}

module.exports = {
  sayHello: sayHello
};
```

In this example, the message variable and the sayHello function are defined within the module, and the module.exports object is used to specify which properties and methods should be made available for use outside of the module.

To use this module in another file, you would `require` it and then access its properties and methods:

```
// index.js
const myModule = require('./myModule');
myModule.sayHello(); // Output: Hello, world!
```

- Modules in Node.js can also have dependencies on other modules, and the `require` function can be used to include these dependencies. This allows you to build complex applications by composing smaller, reusable modules.

---

## 9. Filename / Dirname
- In Node.js, `__filename` and `__dirname` are special variables that provide information about the current module being executed.

1. `__filename`:

Represents the absolute path of the current module file, including the file name.
This variable is read-only and can be used to determine the location of the current module, allowing for dynamic file loading, for example.
2. `__dirname`:

Represents the absolute path of the directory that contains the current module file.
It does not include the file name.
Both `__filename` and `__dirname` can be used within any module in a Node.js application to access information about the location of the module and its associated files.


---

## Nodejs Built In Modules

- Node.js has several built-in modules that provide a range of functionality, including:

1. `http`: A module for creating HTTP servers and clients. It provides a simple way to create, configure, and handle HTTP requests and responses in a Node.js application.

2. `fs` (File System): A module for working with the file system on a computer. It provides a range of functions for reading, writing, and manipulating files and directories.

3. `path` : A module for working with file and directory paths. It provides functions for joining, normalizing, and resolving paths, as well as other path-related operations.

4. `util` : A module for utility functions. It provides a variety of functions for formatting, debugging, and working with data structures.

5. `stream` : A module for working with streams of data. It provides an abstract base class for implementing custom stream objects and a set of built-in stream classes for common tasks, such as reading and writing files.

6. `crypto`: A module for cryptography-related operations. It provides functions for generating secure random numbers, hashes, and digital signatures, as well as other cryptography-related operations.

7. `events` : A module for working with events. It provides an EventEmitter class for emitting and handling events, as well as other event-related functions.

8. `zlib` : A module for working with compressed data. It provides functions for compressing and decompressing data using various algorithms, such as gzip and deflate.


9. `os` : A module for interacting with the underlying operating system. It provides functions for accessing information about the system, such as the hostname, total memory, and uptime.

10. `child_process` : A module for working with child processes. It provides functions for creating and managing child processes, as well as for communication between the parent and child processes.

11. `url` : A module for working with URLs. It provides functions for parsing, formatting, and resolving URLs, as well as other URL-related operations.

12. `querystring` : A module for working with query strings. It provides functions for parsing and formatting query strings, as well as other query string-related operations.

13. `tls` : A module for implementing secure communication using TLS (Transport Layer Security) and SSL (Secure Sockets Layer). It provides functions for creating secure servers and clients, as well as for other TLS-related operations.

14. `dns` : A module for working with DNS (Domain Name System). It provides functions for resolving domain names, as well as other DNS-related operations.

15. `net` : A module for working with network connections. It provides functions for creating and managing network connections, as well as for other network-related operations.


16. `buffer` : A module for working with binary data. It provides a class for representing and manipulating binary data, as well as other buffer-related operations.

17. `timers`: A module for working with timers. It provides functions for scheduling and managing timer events, such as setTimeout and setInterval.

18. `console`: A module for working with the console. It provides functions for logging messages to the console, as well as other console-related operations.

19. `process` : A module for working with the process. It provides information and control over the current Node.js process, including environment variables, standard input and output streams, and process-related events.

20. `module`: A module for working with modules. It provides functions for loading, managing, and resolving dependencies between modules.


---

## EventEmitter 


- The `EventEmitter` class is a built-in class in Node.js that allows objects to emit custom events and subscribe to these events. It is commonly used to implement publish/subscribe patterns in Node.js applications.

Here's how it works:

An object that inherits from the EventEmitter class can emit custom events using the emit method.
Other objects can subscribe to these events by using the on method.
When an event is emitted, all the listeners that are registered to that event are notified.
Example code:

```
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('event', () => {
  console.log('an event occurred!');
});

myEmitter.emit('event');
```

- This is just a basic example. The EventEmitter can be used for much more complex cases, such as distributing data between different components of an application.


---



---


# Event Loop - The Heart Of Nodejs 

- part1 : [Event-Loop](./Event-Loop/part1.md) 


