//Task 2

// let a  = parseInt(prompt("A : "));
// let b  = parseInt(prompt("B : "));

// b = b + a;
// a = b - a;
// b = b - a;

// alert("A : " + a);
// alert("B : " + b);

// Task 3

// let a = parseInt(prompt("A : "));
// let b = parseInt(prompt("B : "));
// let c = parseInt(prompt("C : "));

// if (a === 0 || b === 0 || c === 0) {
//     console.log("The value of number cannot be zero");
// }

// else{
//     let x = c - b / a;
//     console.log(x);
// }

// Task 5 

// let a = parseInt(prompt("A : "));
// let b = parseInt(prompt("B : "));
// let c = parseInt(prompt("C : "));

// let d = Math.pow(b , 2) - 4 * a * c;

// if (d < 0) {
//     console.log("There is no solution!");
// }

// else{
//     let x1 = (-b + Math.sqrt(d)) / 2 * a;
//     let x2 = (-b - Math.sqrt(d)) / 2 * a;

//     console.log(`x1 is equal to ${x1} and x2 is equal to ${x2}`);
// }

// Task 6

// let firstnumbers = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty" , "ninety"];
// let secondnumbers = [ "one" , "two" , "three" , "four" , "five" , "six" , "seven" , "eight" , "nine" ];
// console.log("Type a number: ");
// let number = parseInt(prompt("Input a number : "));
// if (number < 100 && number > 9)
// {
//     switch (number)
//     {
//         case 10:
//             console.log("Ten");
//             break;
//         case 11:
//             console.log("Eleven");
//             break;
//         case 12:
//             console.log("Twelve");
//             break;
//         case 13:
//             console.log("Thirteen");
//             break;
//         case 14:
//             console.log("Fourteen");
//             break;
//         case 15:
//             console.log("Fifteen");
//             break;
//         case 16:
//             console.log("Sixteen");
//             break;
//         case 17:
//             console.log("Seventeen");
//             break;
//         case 18:
//             console.log("Eighteen");
//             break;
//         case 19:
//             console.log("Nineteen");
//             break;
//         default:
//             let firstnumber = parseInt(number / 10);
//             let secondnumber = number % 10;
//             if (firstnumber > 0 && secondnumber > 0)
//             {
//                 console.log(firstnumbers[firstnumber - 2] + " " + secondnumbers[secondnumber - 1]);
//             }
//             else if(firstnumber > 0 && secondnumber == 0)
//             {
//                 console.log(firstnumbers[firstnumber - 2]);
//             }
//             break;
//     }
// }

// else
// {
//     console.log("Number must be less than 100 and more than 9 :D");
// }


// Task 7

// let x = parseInt(prompt("x : "));
// let y = parseInt(prompt("y : "));
// let r = parseInt(prompt("r : "));

// if (Math.pow(x,2) + Math.pow(y,2) === Math.pow(r,2)) {
//     console.log("Point is on the circle");
// }

// else if (Math.pow(x,2) + Math.pow(y,2) > Math.pow(r,2)) {
//     console.log("Point is out of the circle");
// }

// else{
//     console.log("Point is inside a circle");
// }