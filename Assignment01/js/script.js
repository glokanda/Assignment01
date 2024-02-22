/*
 Title: Assigment 1   
 Author: Gloire Kanda
 Date: 2/21/2023

*/
// STEP 1 
// Convert the following highlighted identifiers to Camel Case notation

let someMonth
function theMonth() {}
let currentMonth
let summerMonth
let myLibraryFunction

// STEP 2  
// Provide examples of a numeric literal expression, a string literal expression, 
// a Boolean literal expression, and a null literal expression.

let num = 5 // Numeric literal expression
let personName = "Glory" // String literal expression
isCorrect = false // Boolean literal expression
examResult = null // Null literal expression

// STEP 3 Provides two examples of complex / variable expressions.

let a = 5, b = 10, c = 15

let expression1 = (a * b) + (c * 2)
let expression2 = (a * b) / (c * 4)

// STEP 4 Declare 9 variables without assigning values

let firstName, lastName, address, city, strState, zipCode, intYourAge, referralSource, mayWeContactYou

// STEP 5 Take the 3 of the 9 variables that you created above 
// and demonstrate 3 ways for declaring and assigning values to those variables.

firstName = "Shine"

intYourAge = 30

referralSource = true

// STEP 6
// Add a number and a string and display the coerced result in the browser’s console window

let variable1 = 20 + "74"
console.log(variable1)

// STEP 7
// Create two variables.For the first variable, add a Boolean and a string and display the coerced result.
// For the second variable, add a number and a Boolean and display the coerced result.

let variable2 = true + "Rain"
console.log(variable2)
let variable3 = 15 + false
console.log(variable3)

// STEP 8
// Checking if string literal is valid or no. If no, fix it.
let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."'
console.log(someString)

// STEP 9
// Create a variable that produces a null value in the console window.
// Then, create a variable that produces an undefined value in the console window

let nullVariable = null;
let undefinedVariable;
console.log(nullVariable)
console.log(undefinedVariable)

// STEP 10
// Use the unary typeof operator on various literals to return the following types 
// within the console window: string, number, Boolean, object, and undefined.

console.log(typeof "Bonjour") // string
console.log(typeof 25) // number
console.log(typeof false) // boolean
console.log(typeof {}) // object
console.log(typeof undefined) // undefined

// STEP 11
// Within an alert box, use the concatenation operator (+) to display text in the alert box 
// that appears as Hello Glory Kanda, welcome to the JavaScript class!

alert("Hello " + "Glory Kanda" + ",Welcome to the " + "JavaScript"+ " class!")

// STEP 12
// Declare a variable called name and set it equal to your name.
// Substitute your name in the previous alert string with the variable instead.

let name = "Glory Kanda"
alert("Hello " + name + ",Welcome to the " + "JavaScript"+ " class!")

// STEP 13
// Declare a variable called course and set it equal to “JavaScript”.
// Rework your alert string so that it displays the string of text but using the variables as opposed to hard coded text.

let course = "JavaScript"
alert("Hello " + name + ",Welcome to the " + course + " class!")

// STEP 14
// Rework the above string so that a line break is added right before the word “Welcome”.
alert("Hello " + name + ".\nWelcome to the " + course + " class!")

// STEP 15
// Replace the hardcoded string of your name with a prompt that asks the user for their name. 
// The prompt’s response will now be captured in the name variable.
studentName = prompt("What is your name?")
// STEP 16
// Replace the hardcoded string of the class you are taking with a prompt that asks the user for the class they are taking. 
// The prompt’s response will now be captured in the course variable.
courseName = prompt("What class are you taking?")
alert("Hello " + studentName + ".\nWelcome to the " + courseName + " class!")

// STEP 17
// Add and assign value to a variable, and display the sum of those two numbers in the console window.
let x = 10
let y = 20
console.log(x + y)

// STEP 18
//Declare a variable called x and assign it a value of 20.
// Add and assign 20 to that variable and display the result in the console window.
// The result should be 40.
x = 20
x += 20
console.log(x)

// STEP 19
// Declare a variable called x and assign it a value of 20.
// Multiply and assign 5 to that variable and display the result in the console window.
// The result should be 100.
x = 20
x *= 5
console.log(x)

// STEP 20
// Declare a variable called x and assign it a value that equals the remainder of 20 divided by 3.
// Divide and assign 1 to that variable and display the result in the console window.
// The result should be 2. If you got 6.66 try again.

x = 20 % 3
x /= 1
console.log(x)

// STEP 21
// Using a set of Comparison and Logical operators, write an application that evaluates
//  to true and displays the result within the console window.
console.log(1 < 2 && "Var" != "let")

// STEP 22
//Using a set of Comparison and Logical operators, write an application that evaluates to false and displays the result within the console window.
//  The application cannot use the same operators used in the previous application
console.log(10 == 5 || 5 < 2)





