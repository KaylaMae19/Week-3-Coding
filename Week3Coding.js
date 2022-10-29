//1.Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
//1a.Subtract the value of the first element in the array from the value in the last element of the array 

var ages = ['3', '9', '23', '64', '2', '8', '28', '93'];
console.log("First element subtracted from the last:", ages[ages.length-1] - ages[0]);

//1b.Add a new age to your array and repeat the step above.
ages.push(7);
console.log("Add a new age to the array:", ages[ages.length-1] - ages[0]);

//1c.Use a loop to iterate through the array and calculate the average age. 
var i, total = 0;
for(i = 0; i < ages.length; i++) {
    total = total + ages[i];
}
console.log('Average age is', total / ages.length); 

//2.Create an array called names that contains the followng values.
var names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

//2a.Use a loop to iterate through the array and calculate the average number of lettrs per name. 
total = 0;
for(i = 0; i < names.length; i++) {
    total = total + names[i].length;
}
console.log("Average number of letters", total / names.length);

//2b.Use a loop to iterate through the array again and concatenate all the names together.
var con = names[0];
for(i = 1; i < names.length; i++) {
    con = con.concat( " ", names[i]);
}
console.log(con); //added to see how the array appeared after loop. 

//3.How do you access the last element of any array?
const lastItem = names[names.length-1];
console.log("Accessing the last element:", names.length);

//4.How do you access the first element of an array?
console.log("Accessing first element of the array:", names[0]);

//5.Create a new array called nameLengths. 
//Write a loop to iterate over the previously created name array and add the length
//of each name to the nameLengths array.
let nameLengths = [];
for(var i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}
//Printing to the browser to verifiy the push and length
console.log("Name Array:", names);
console.log("Length of each name:", nameLengths);

//6.Write a loop to iterate over the nameLengths array and calculate the sum of all elements. 
let sum = 0;
for(i = 0; i < nameLengths.length; i++) {
    sum = sum + nameLengths[i];
}
console.log("Sum of all elements:", sum);

//7.Write a function that takes two parameters as arguments and returns the word concatenated 
//to itself n number of times. 
function concat_n_times(word, n) {
    var con = word;
    for(i = 1; i < n; i++) 
 con = con.concat(word)
      return con;
}
console.log(concat_n_times("Hello" + ' ', 4));

//8.Write a function that takes tow parameters, first and last name, and returns a full name. 
function fullName (firstName, lastName) {
    return firstName.concat(' ', lastName);
}
console.log("Full Name is:", fullName( 'John', 'Smith'));
 
//9.Write a function that takes an array of numbers and returns true if the sum of all the 
//numbers in the array is greater than 100.
let arr = [1, 2, 3, 4]
let arr2 = [1, 2,]
function isSumGreater(arr) {
let sum = 0;
for(i=0; i < arr.length; i++) {
    sum = sum + arr[i];
} if(sum > 100) {
    return true;
}else{
    return false;
}
}
console.log("Is the sum of all numbers greater than 100?", isSumGreater(arr));
//10.Write a function that takes an array of numbers and returns the average of 
//all the elements in the array
function average(array) {
   let sum = 0;
    for(i = 0; i < array.length; i++) {
        sum = sum + arr[i];
    }
    return (sum / array.length);
}
console.log("Average of all elements:", average(arr));

//11.Write a function that takes two arrays of numbers and returns true if the average
//of the elements in the first array is greater than the average of the second array. 
function compareAverage(arr, arr2) { 
    if(average(arr) > average (arr2)) {
        return true;
    }else{
        return false;
    }
} 
console.log("Is the average of the first array greater than the second?", compareAverage(arr, arr2));

//12.Write a function called willBuyDrink that takes a boolean isHotOutside, and a number
//moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater
//than 10.50.
let isHotOutside = true;
let moneyInPocket = 40.18;
function willBuyDrink (isHotOutside, moneyInPocket) {
    if((isHotOutside) && (moneyInPocket > 10.50)) {
        return true;
    }else{
        return false;
    }
}
console.log("Is it hot outside? Do we have more than $10.50?", willBuyDrink(isHotOutside, moneyInPocket));

//13.Create a function of your own that solves a problem. 
//Simple function calculating whether we can afford a costume or not. 
let halloweenCostume = 45.99;
let bankAccount = 45.97;
function canWeBuyCostume (halloweenCostume, bankAccount) {
    if(halloweenCostume <= bankAccount) {
    return true;
}else{
    return "Go home. Your Broke.";
}
}
console.log("Can we buy a halloween costume?", canWeBuyCostume(halloweenCostume, bankAccount));