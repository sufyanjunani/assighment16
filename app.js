
                        //  Chapter 6 (Math Expression II)
// Q1
var num=(x++);
var newNum=(x += 1);
console.log(num)

// Q2
var X=(100);
console.log(--X);
// Q3
var x = 50;
var y = x++;
 console.log("the value of y" , y)
// Q4
var y = 50;
var z = --y;
console.log("the value of z" , z)
// Q5
var num = 200;
var newNum = num--; 
console.log("Original value of num:", num);  
console.log("Value of newNum:", newNum);  
// Q6
var originalNum = 5;
var newNum = originalNum++;
console.log("Value of newNum:", newNum);  
console.log("value of originalNum:", originalNum);  
// Q7
var myNumber = 10;
myNumber++; 
alert("The new value is: " + myNumber);




//    Chapter 7 (Math Expression III) 
// Q1
var calculatedNum = 2 + (2 * 6);
console.log("is the value of calculatedNum" , calculatedNum)
// Q2
var calculatedNum = (2 + 2) * 6;
console.log("is the value of calculatedNum" , calculatedNum)
// Q3
var calculatedNum = (2 + 2) * (4 + 2);
console.log("is the value of calculatedNum" , calculatedNum )
// Q4
var calculatedNum = ((2 + 2) * 4) + 2;
console.log("is the value of calculatedNum" , calculatedNum)
// Q5
var cost = (2 + 2) * 14;
console.log(cost); 
// Q6
var units = 2 + (2 * 4) + 10;
console.log(units); // Outputs: 20
// Q7
var pressure = (4 / 2) + 3;
console.log(pressure); 


                //    Chapter 8 (Concatenating Text Strings)
// Q1
var num = "2" + "2";
console.log(num)
console.log("The value of would num be the string 22 (including the quotation marks).  In JavaScript, when the + operator is used with strings, it concatenates them together instead of performing numeric addition.")
// Q2
var message = "Hello," + "Dolly";
alert(message);
// Q3
alert("33"  +  3);
// Q4
var part1 = "Pakistan";
var part2 = "Zindabad";
alert(part1 + " " + part2);
// Q5
var result = "Hello" + 123;
// Q6
var firstString = "Hello";
var secondString = "World";

var concatenatedString = firstString + secondString;

console.log(concatenatedString);

                //    Chapter 9 (Prompts)
// Q1
var firstName = prompt("Enter first name");
console.log("User entered: " + firstName);
// Q2 
var country = prompt("Country?", "China");
console.log("User entered country: " + country);
// Q3
var yourName = prompt("Enter Your Name");
// Q4
var userInput = prompt("Please enter your response", "Default Value");
console.log("User entered: " + userInput);
// Q5
var firstString = "What's your favorite color?";
var secondString = "Blue";

var userResponse = prompt(firstString, secondString);

console.log("User's response: " + userResponse);
// Q6
var promptMessage = "What is your favorite food?";
var defaultResponse = "Pizza";

var userResponse = prompt (promptMessage, defaultResponse);

alert ("Your response is: " + userResponse);
