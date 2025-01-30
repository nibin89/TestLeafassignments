/* Understand different ways to declare functions in JavaScript and how to use callback
functions. */

/* Task 1: Function Declaration
Create a function named `userProfile` that takes a `name` as a parameter and logs “Hello,
<name>!" to the console. */

function userProfile(name) {

console.log( `Hello  ${name}` )

}
userProfile("Nibin")

/* Task 2: Arrow Function
Create an arrow function named `double` that takes a number as a parameter and returns
double its value.
 */
let double =(value)=> {

    return value * 2

}

console.log(double(30))

/* Task 3: Anonymous Function
Use an anonymous function with `setTimeout` to log `"This message is delayed by 2 seconds"`
after 2 seconds */

setTimeout(function() {
    console.log("This message is delayed by 2 seconds.");
}, 2000);