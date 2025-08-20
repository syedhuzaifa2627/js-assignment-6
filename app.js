// Chapter 17 to 20

// Question 1

// var arr = [
//     [] , [] , []
// ]

// console.log(arr)

// Question 2

// var newarr = [
//    [5 , 6 , 4 , 0],
//    [4 , 3 , 2 , 0],
//    [9 , 8 , 7 , 0]
// ]

// document.writeln(newarr[0].join(" ") + "<br>")
// document.writeln(newarr[1].join(" ") + "<br>")
// document.writeln(newarr[2].join(" ") + "<br>")

// Question 3

// document.writeln("Forward Number Counting Till 10  <br> <br>")

// for( var i = 1; i <= 10; i++){
//    document.writeln(i + "<br>")
// }

// Question 4

// var numberTable = +prompt("Enter a number to show it's multiplication table.")
// var numberLength = +prompt("Enter length of multiplication table.")

// document.writeln("Multiplication Table of" + " " + numberTable + "<br>" + "Length" + " " + numberLength + "<br> <br>")

// for( var i = 1; i <= numberLength; i++){
// document.writeln(numberTable + "x" + i + "=" + (i*numberTable) + "<br>" )
// }

// Question 5

// var fruits = ["apple" , "banana" , "mango" , "orange" , "strawberry" , "guava" , "kiwi" , "grapes"]

// for( var i = 0; i < fruits.length; i++){
//    document.writeln(fruits[i] + "<br>")
// }

// Question 6

// a
// document.writeln("<h3> Counting: </h3>")

// for( var i=1; i<=15; i++ ){
//     document.writeln(i + ", ")
// }

// b
// document.writeln("<h3> Reverse Counting: </h3>")

// for( var i=10; i>=1; i-- ){
//   document.writeln(i + ", ")
// }

// c
// document.writeln("<h3> Even: </h3>")

// for( var i=0; i<=20; i+=2 ){
//    document.writeln(i + ", ")
// }

// d
// document.writeln("<h3> Odd: </h3>")

// for( var i=1; i<20; i+=2 ){
//  document.writeln(i + ", ")
// }

// e
// document.writeln("<h3> Series: </h3>")

// for( var i=2; i<=20; i+=2 ){
//     document.writeln(i + "k, ")
// }

// Question 7

// var deserts = ["cake" , "apple pie" , "cookie" , "chips" , "patties"]

// var userChoice = prompt("Welcome to My Bakery. What you wanna order here?")

// if(deserts.indexOf(userChoice) !== -1){
//     alert(userChoice + " is available at index " + deserts.indexOf(userChoice) + " in our bakery.")
// } 
//  else {
//  alert("We are sorry. " + userChoice + " is not available in our bakery.")
// }

// Question 10

// document.writeln("<h3> Multiples of 5: </h3>")

// for( var i=5; i<=100; i+=5){
//    document.writeln(i + ", ")
// }

// Question 8

// var  findLargeOne = [24, 53, 78, 91, 12]
// var largest = findLargeOne[0]

// for (var i = 1; i < findLargeOne.length; i++) {
//  if (findLargeOne[i] > largest) {
//    largest = findLargeOne[i]
//   }
// }

// document.writeln("Array items: " + findLargeOne.join(", ") + "<br>")
// document.writeln("The largest number is " + largest)

// Question 9

var findSmallOne = [24, 53, 78, 91, 34]
var smallest = findSmallOne[0]

for(var i = 1;i >= findSmallOne.length; i++) {
  if (findSmallOne[i] > smallest) {
    smallest = findSmallOne[i]
  }
}

document.writeln("Array items: " + findSmallOne.join(", ") + "<br>")
document.writeln("The smallest number is " + smallest)