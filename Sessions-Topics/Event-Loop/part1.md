
# Event Loop - part 1 

 - Before Talking About Event Loop There are Some Topics We Need To Know First 


## I/O Opertations


- Short for input/output, I/O refers primarily to the program’s interaction with the system’s disk and network. Examples of I/O operations include reading/writing data from/to a disk, making HTTP requests, and talking to databases. They are very slow compared to accessing memory (RAM) or doing work on the CPU.

<br>

---

<br>


## Synchronous vs Asynchronous

1. `Synchronous` (or `sync`) execution usually refers to code executing in sequence. In sync programming, the program is executed line by line, one line at a time. Each time a function is called, the program execution waits until that function returns before continuing to the next line of code.

2. `Asynchronous` (or `async`) execution refers to execution that doesn’t run in the sequence it appears in the code. In async programming the program doesn’t wait for the task to complete and can move on to the next task.


---


## Blocking vs Non Blocking 

- `Blocking` refers to operations that block further execution until that operation finishes while non-blocking refers to code that doesn’t block execution. Or as Node.js docs puts it, blocking is when the execution of additional JavaScript in the Node.js process must wait until a non-JavaScript operation completes.

- `Blocking` methods execute synchronously while `non-blocking` methods execute asynchronously.

```
function moreWork(){
	  console.log(" Hey moreWork was Called ")
}

// Blocking

const fs = require('fs');
const data = fs.readFileSync('./some_file'); // blocks here until file is read
console.log(data);
moreWork(); // will run after console.log

// Non-blocking

fs.readFile('/file.md', (err, data) => {
  if (err) throw err;
  console.log(data);
});
moreWork(); // will run before console.log

```

---


- A callback in JavaScript is a function that is passed as an argument to another function, and is executed after some kind of event or operation has completed. Callbacks are often used in JavaScript to handle asynchronous behavior, such as waiting for a response from a server or completing an animation before executing another function.


example : 

```
function doSomething(callback) {
  console.log("Doing something...");
  setTimeout(function() {
    console.log("Done doing something!");
    callback();
  }, 1000);
}

function done() {
  console.log("I'm done!");
}

doSomething(done);
```

In this example, doSomething is a function that takes a callback as its argument. It logs "Doing something...", and then uses setTimeout to wait for one second before logging "Done doing something!". After this, the callback function is executed, which logs "I'm done!".

When doSomething is called with done as its argument, the output of the code will be:

```
Doing something...
Done doing something!
I'm done!
Callbacks are a fundamental concept in JavaScript and are widely used in various APIs and libraries to handle asynchronous behavior.
```

---

- This is How Event Loop Work in Browser - NodeJs has the Same Concepts but we will discuss it More Details in Event-Loop-Part2 in the Next Session  


[![Event Loop](../media/event_loop_play_cover.png)](../media/event-loop-visualized.mp4 "Event Loop")




## Event Loop With A Simple Explain 

- The event loop in Node.js is a mechanism that allows the execution of JavaScript code to be non-blocking and performant. It works by continuously checking the message queue for new messages or events, and executing the corresponding event handlers.

Here's how the event loop works in Node.js:

1. JavaScript code is executed in a single thread, and when it encounters a blocking operation (e.g. reading a file from disk), it queues the operation to be performed by the system, and continues executing the rest of the code.

2. When the system has completed the blocking operation, it adds a message to the message queue, indicating that the operation has finished and its associated callback should be executed.

3. The event loop continuously checks the message queue for new messages. If it finds one, it removes it from the queue and executes the corresponding callback.

4. After the callback has completed, the event loop checks the message queue again, repeating the process until the queue is empty.

5. When the message queue is empty, the event loop is free to process any other operations that are waiting in the background.

- This event loop architecture enables Node.js to handle many simultaneous connections and operations efficiently, as it allows the JavaScript code to continue executing without blocking, even when waiting for the results of slow or I/O-bound operations.

- It is important to note that the event loop is a single thread, so long-running operations or computationally expensive tasks can still block the event loop and cause performance issues. To mitigate this, Node.js provides mechanisms such as worker threads, which allow you to offload these tasks to separate threads.

- Summary : 

- The event loop is part of the Node.js runtime and is not a separate thread. Instead, it is a single thread that executes JavaScript code and manages the message queue.

1. The message queue is a list of messages or events that are waiting to be processed. Each message is associated with a callback function that should be executed when the message is processed.

2. The event loop runs in a loop, constantly checking the message queue for new messages. When it finds a message, it removes it from the queue and executes the associated callback. This process continues until the message queue is empty.

3. The event loop also checks for other types of operations, such as timers (setTimeout, setInterval), I/O operations, and incoming network connections. When one of these operations is complete, a message is added to the message queue, indicating that its associated callback should be executed.

4. The event loop operates as a first-in, first-out (FIFO) queue, meaning that messages are processed in the order in which they are added to the queue.

5. Callbacks that are added to the message queue are executed in the order in which they are added, and not in the order in which the operations they correspond to complete.

6. Callbacks that are added to the message queue are executed as soon as possible, but are subject to the constraints of the event loop and the state of the message queue.

- The event loop is single-threaded, meaning that only one callback can be executed at a time. If a callback takes a long time to complete, it will block the event loop and prevent other callbacks from being processed. To prevent this, it is important to make sure that callbacks are designed to execute quickly, and that long-running operations are offloaded to worker threads or other background tasks.


---
