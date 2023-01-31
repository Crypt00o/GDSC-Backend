<h1 aligin="center">  Session 2 - JavaScript   </h1>

## Contents 
1. [Compiled Languages vs Interpreted Languages](#compiled-language-vs-interpreted-language)
2. [Dynamic Typeing Languages vs Static Typeing Languages](#dynamic-typeing-language-vs-static-typeing-language)
4. [What is JavaScript ?](#javascript)
5. [What is ECMAScript ?](#ecmascript)
6. [V8 vs SpiderMonkey vs Nodejs ](#v8-vs-spidermonkey-vs-nodejs)
7. JavaScript :
	  1. [Variables](#variables)
	  2. [Primtive Types](#primtive-types)
	  3. [Dynamic-Refferences-Types](#dynamic-or-refferences-types)
	  4. [Arrays](#arrays)
	  5. [Objects](#objects)
	  6. [Functions](#functions)

<br><br>
---
<br><br>

## Compiled language Vs Interpreted Language

#### Compiled Languages

- Compiled languages are converted directly into machine code that the processor can execute. As a result, they tend to be faster and more efficient to execute than interpreted languages. They also give the developer more control over hardware aspects, like memory management and CPU usage.
<br>
- Compiled languages need a “build” step – they need to be manually compiled first. You need to “rebuild” the program every time you need to make a change. In our hummus example, the entire translation is written before it gets to you. If the original author decides that he wants to use a different kind of olive oil, the entire recipe would need to be translated again and resent to you.
<br>
- Examples of pure compiled languages are C, C++, Erlang, Haskell, Rust, and Go.

<br><br>

#### Interpreted Languages
- Interpreters run through a program line by line and execute each command. Here, if the author decides he wants to use a different kind of olive oil, he could scratch the old one out and add the new one. Your translator friend can then convey that change to you as it happens.
<br><br>
- Interpreted languages were once significantly slower than compiled languages. But, with the development of just-in-time compilation, that gap is shrinking.

- Examples of common interpreted languages are PHP, Ruby, Python, and JavaScript.



<br><br>
---
<br><br>

## Dynamic Typeing Language Vs Static Typeing Language

#### Staticlly Typed Languages

- A language is statically typed if the type of a variable is known at compile time. For some languages this means that you as the programmer must specify what type each variable is; other languages (e.g.: Java, C, C++) offer some form of type inference, the capability of the type system to deduce the type of a variable (e.g.: OCaml, Haskell, Scala, Kotlin).

The main advantage here is that all kinds of checking can be done by the compiler, and therefore a lot of trivial bugs are caught at a very early stage.

Examples: C, C++, Java, Rust, Go, Scala

- example in c :
	  ```
	  char my_name[6] ="eslam mohamed";  
	  int age = 21 ;
	  ```

#### Dynamically Typed Languages
A language is dynamically typed if the type is associated with run-time values, and not named variables/fields/etc. This means that you as a programmer can write a little quicker because you do not have to specify types every time (unless using a statically-typed language with type inference).

Examples: Perl, Ruby, Python, PHP, JavaScript, Erlang

Most scripting languages have this feature as there is no compiler to do static type-checking anyway, but you may find yourself searching for a bug that is due to the interpreter misinterpreting the type of a variable. Luckily, scripts tend to be small so bugs have not so many places to hide.

Most dynamically typed languages do allow you to provide type information, but do not require it. One language that is currently being developed, Rascal, takes a hybrid approach allowing dynamic typing within functions but enforcing static typing for the function signature.

- example in python :

```
myName = "eslam mohamed"
age = 21
```
	  
<br><br>
---
<br><br>

## JavaScript

#### So What is JavaScript?

- JavaScript is a versatile programming language that is widely used to create interactive and dynamic websites. Developed in the mid-1990s, it was originally known as LiveScript and was later renamed to JavaScript. It is a high-level, interpreted programming language that is primarily used on the client-side, meaning that the code is executed by the user's web browser rather than on the server.

- JavaScript is often used in conjunction with HTML and CSS to create dynamic web pages that can update and change content without requiring the user to refresh the page. It can be used to create things like form validation, image sliders, and responsive navigation menus. It can also be used to make a website more interactive by allowing it to respond to user input and events. JavaScript can also be used to create server-side applications with technologies like Node.js.

- One of the key features of JavaScript is that it is an object-oriented programming language, which means that it uses objects to represent real-world entities and their properties and methods. This allows developers to create complex and interactive applications using JavaScript.

- JavaScript is also a popular language for creating web-based games, mobile apps, and desktop applications. With the increasing popularity of JavaScript frameworks and libraries such as React, Angular, and Vue.js, it has become easier than ever to create powerful and efficient web applications using JavaScript.

- Overall, JavaScript is a powerful and flexible programming language that is essential for creating dynamic and interactive websites and web applications.




<br><br>
---
<br><br>

## ECMAScript

#### So What is ECMAScript ? 

- ECMAScript (often referred to as simply "JavaScript" or "ES") is a standardized version of the programming language JavaScript. It is developed and maintained by the European Computer Manufacturers Association (ECMA).

- ECMAScript is the standard upon which JavaScript is based, and it defines the syntax, semantics, and other aspects of the language. New versions of ECMAScript are released periodically, with the latest being ECMAScript 2020 (ES11).

- ECMAScript is supported by all modern web browsers, and it is used to create interactive and dynamic web pages, web-based games, mobile apps, and desktop applications. Some popular libraries and frameworks, such as React, Angular, and Vue.js are built on top of ECMAScript.

- ECMAScript provides a wide range of features, including variables, functions, objects, arrays, and regular expressions. It also includes features such as classes, modules, and arrow functions, which were introduced in later versions of the language.

- In summary, ECMAScript is the standard that defines the JavaScript programming language and its various versions, it is widely supported by web browsers and is the foundation of many popular web development technologies.


<br><br>
---
<br><br>

## V8 vs SpiderMonkey vs Nodejs 

- V8 is an open-source JavaScript engine developed by Google. It is written in C++ and is used to interpret and execute JavaScript code. V8 is designed to be fast and efficient and is used in Google Chrome and other Chromium-based browsers, as well as in other projects such as Node.js, MongoDB, and Appcelerator Titanium.

- SpiderMonkey is an open-source JavaScript engine developed by Mozilla. It is written in C++ and is used to interpret and execute JavaScript code. SpiderMonkey is used in Mozilla Firefox and other Mozilla-based products, as well as in other projects such as Adobe Photoshop.

- Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to run JavaScript code on the server-side, outside of a browser. Node.js allows developers to create server-side applications using JavaScript and to take advantage of the many modules and libraries available in the Node.js ecosystem. It is commonly used for building web servers, real-time applications, and command-line tools. Node.js uses the V8 JavaScript engine to interpret and execute JavaScript code, and it is designed to be fast and efficient.

- In summary, V8 and SpiderMonkey are open-source JavaScript engines, they are used to interpret and execute JavaScript code and are used by major web browsers. Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine, which allows developers to run JavaScript code on the server-side, it's commonly used for building web servers, real-time applications, and command-line tools.




<br><br>
---
<br><br>

## Variables 
- In JavaScript, a variable is a container that holds a value, which can be a number, a string, a boolean, an array, or an object. Variables are used to store and manipulate data in a program.

- To declare a variable in JavaScript, you use the keyword "var", "let" or "const" followed by the variable name. The assignment operator (=) is used to assign a value to the variable.

- "var" was the original keyword for variable declaration, but it has some issues, for example, it's function-scoped not block-scoped, and also it has a hoisting behavior (a variable declared with var will be moved to the top of the scope, even if it's declared after an assignment).

- "let" and "const" were introduced in ES6, they are block-scoped, meaning that a variable declared within a block of code (e.g. within a for loop) is only accessible within that block.

- "let" allows you to reassign the value of the variable, while "const" is used to declare a variable that cannot be reassigned. In other words, once a variable is declared with "const", you cannot give it a new value, but you can mutate the object if it's an object.

Here are some examples of variable declarations:


```
let myName = "Eslam Mohamed"; // initializing a variable with a string value
let myAge = 21; // initializing a variable with a number value
let isAdult = true; // initializing a variable with a boolean value
const pi = 3.14; // initializing a variable that can't be reassigned
```
- You can also declare a variable without initializing it with a value, like this:
```
let x;
``` 

-You can use variables in JavaScript in many ways, for example, you can use them in mathematical operations, string manipulation, and so on.

- It's important to use meaningful variable names that describe the value they hold, and also to avoid using reserved keywords or built-in objects as variable names.

- When using "let" and "const", it's recommended to use "const" by default, and only use "let" when you need to reassign the variable.

- Also, be aware of the scope of the variables, a variable declared within a block of code is only accessible within that block, and also be aware of the hoisting behavior of variables declared with "var".

- In summary, variables in JavaScript are containers that hold values, they can be declared with keywords "var", "let" or "const", "let" allows you to reassign the value, "const" is used to declare a variable that can't be reassigned, they should have meaningful names and should not use reserved keywords.


<br><br>
---
<br><br>

## Primtive Types

- In JavaScript, there are several types of primitive data types. These include:
>
> - **Number**: ***Numbers in JavaScript can be integers or floating-point values. JavaScript uses a double-precision 64-bit format for all numbers, which means that it can represent numbers with a wide range of values.***
>
> - **String**: ***Strings are sequences of characters and can be represented using single or double quotes. They are commonly used to store text values such as names, addresses, and other information.***
>
> - **Boolean**: ***Booleans can have one of two values: true or false. They are commonly used in conditional statements to check whether a certain condition is true or false.***
>
> - **Symbol**: ***Symbol is a new data type in javascript, It's used to create unique and immutable values, Symbols are mainly used for object properties and for creating unique object keys.***
>
> - **null**: ***The value null represents no value or no object. It is often used to indicate that a variable has been declared, but it has not yet been assigned a value.***
>
> - **undefined**: ***The value undefined represents a variable that has been declared but has not been assigned a value. It is also the default value of function arguments that are not passed in.***
>

- These data types are considered "primitive" because they are the building blocks of JavaScript and are not objects. They have a fixed size in memory and are the most basic types of data that can be stored in JavaScript.

- It's important to note that JavaScript has a dynamic type system, which means that you don't have to specify the type of data when declaring a variable, the type will be inferred based on the value assigned to the variable.

- In summary, JavaScript has several primitive data types which include Number, String, Boolean, Symbol, null and undefined, These data types are considered "primitive" because they are the building blocks of JavaScript and are not objects, they have a fixed size in memory and are the most basic types of data that can be stored in JavaScript.


<br><br>
---
<br><br>

## Dynamic Or Refferences Types

- Reference data types, on the other hand, are stored in memory as a reference to an object. This means that they are stored as a memory address that points to an object, rather than storing the object itself. The main reference data types in JavaScript are arrays, objects, and functions.

- When a variable is assigned a reference data type, it is given a reference to the object rather than the object itself. This means that any changes made to the object will be reflected in all variables that reference it. This can lead to unexpected behavior if you are not careful.

- For example, consider the following code:

```
let arr = [1, 2, 3];
let newArr = arr;
newArr.push(4);
console.log(arr); // [1, 2, 3, 4]
```

- In this example, the variable "arr" is assigned an array containing the values 1, 2, and 3. The variable "newArr" is then assigned the value of "arr", which is a reference to the same array. When we push the value 4 to the "newArr" array, it also changes the "arr" array, this is because both variables are referencing the same array in memory.

- To avoid unexpected behavior, you can use the spread operator(...) or .slice() method to create a new copy of the array.

- In summary, JavaScript has two types of data types: primitive and reference. Primitive data types are stored in memory as a single value and are immutable. Reference data types, on the other hand, are stored in memory as a reference to an object, this means that any changes made to the object will be reflected in all variables that reference it, this can lead to unexpected behavior if you are not careful, to avoid this behavior you can use the spread operator or .slice() method to create a new copy of the array.

	  

<br><br>
---
<br><br>

## Objects
- JavaScript, an object is a collection of properties, each with a key (also known as a "property name") and a value. These properties can be any valid JavaScript data type, including numbers, strings, and other objects. Objects in JavaScript are similar to dictionaries in Python or hash maps in Java.

- Objects can be created in a number of ways, including using object literals, the object constructor, and object.create().

- One of the most common ways to create an object is using an object literal. This is done by enclosing a set of key-value pairs in curly braces {}. For example:


```
const me = {
name: "Eslam Mohamed",
age : 21
 };

```

- Properties can be accessed using the dot notation, like me.name or me.age.

- You can also use the object constructor to create objects. This is done by calling the Object() constructor and passing in an initial set of properties. 

For example:

```
const me = new Object();
me.name = "Eslam Mohamed";
me.age = 21;
```

- Objects in JavaScript are also extensible and mutable, meaning that properties can be added, removed, or modified after the object is created.

- You can also use Object.create() method to create an object, this method creates a new object with the specified prototype object and properties.

```
const me = Object.create(Object.prototype, {
  name: {
    value: 'Eslam Mohamed,
    enumerable: true,
    writable: true,
    configurable: true
  },
  age: {
    value: 21,
    enumerable: true,
    writable: true,
    configurable: true
  }
});
```

<br><br>
---
<br><br>

## Arrays

- In JavaScript, an array is a special type of object that is used to store a collection of values. Arrays are ordered and zero-indexed, meaning that each element in the array has a numerical index that starts at 0 and an associated value.

- Arrays can be created in a number of ways, including using array literals, the array constructor, and Array.from() method.

- One of the most common ways to create an array is using an array literal. This is done by enclosing a set of values separated by commas in square brackets []. 
For example:

```
const numbers = [1, 2, 3, 4, 5];
const colors = ['red', 'green', 'blue'];
```

-Elements in the array can be accessed using the square bracket notation, like numbers[0] or colors[2].

- You can also use the array constructor to create arrays. This is done by calling the Array() constructor and passing in an initial set of elements. For example:


```
const numbers = new Array(1, 2, 3, 4, 5);
```

- You can also use Array.from() method to create an array from an array-like or iterable object.

```
const numbers = Array.from({0:1,1:2,2:3,3:4,4:5,length:5});
```

- Arrays in JavaScript have built-in methods that can be used to manipulate the elements, such as push() for adding elements, pop() for removing elements, and sort() for sorting the elements.

- JavaScript arrays are also dynamic, meaning that the length of the array can change as elements are added or removed.

- Arrays in JavaScript are used in many parts of the language such as loops, array methods, and iteration. They are also used to store and manipulate large amounts of data in web development, for example, storing a list of items in a shopping cart, or user data in a database.




<br><br>
---
<br><br>

## Functions
- In JavaScript, a function is a block of code that can be executed when it is called. Functions are a fundamental building block of the language, and they can be used to perform a wide range of tasks, from performing calculations to manipulating the DOM (Document Object Model) of a web page.

- Functions can be defined in two ways: function declarations and function expressions.

- Function declarations are defined using the function keyword, followed by the name of the function and a set of parentheses that contains any input parameters (also known as "arguments") that the function takes. The function's code block is wrapped in curly braces {}.

For example:
```
	  function add(x, y) {
			return x + y;
	  }
```

- This example defines a function named "add" that takes two arguments, "x" and "y", and returns the sum of the two arguments.

- Function expressions are defined using the function keyword, but instead of being given a name, it's assigned to a variable. For example:

```
	  const multiply = function(x, y) {
			return x * y;
	  };
```

- This example defines an anonymous function that multiplies two numbers and assigns it to the variable multiply.

- Functions can also be defined using arrow function expressions. Arrow function expressions are a shorthand syntax for function expressions that use the => operator. For example:


```
	  const divide = (x, y) => {
			return x / y;
	  };
```

- This example defines an anonymous arrow function that divides two numbers and assigns it to the variable divide.

- Once a function is defined, it can be called by using its name followed by a set of parentheses and passing in the required arguments.

For example:

```
const result = add(3, 4);
console.log(result); // 7
```

- Functions are an important part of JavaScript because they allow for code reuse, making it easier to write and maintain large programs. Functions can also be used to encapsulate complex logic and make it more readable, and they can also be passed as arguments to other functions, making them first-class citizens in JavaScript.



<br><br>
---
<br><br>

## 

---
