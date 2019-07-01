// Write a for loop that will log the numbers 1 through 20.
for (let i = 1; i <= 20; i++) {
	console.log(i);
}
// Write a for loop that will log only the even numbers in 0 through 200.
for (let i = 0; i <= 200; i++) {
	if (i % 2 === 0) {
		console.log(i);
	}
}
// Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
//For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.

const randomSaying = [ "...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."];
for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) 
 console.log(randomSaying[Math.floor(Math.random()*randomSaying.length)])
  else console.log("Love me, pet me! HSSSSS")
}


// Write a javascript application that logs all numbers from 1 - 100.
for (let i = 1; i <= 100; i++) {
	console.log(i);
}
// If a number is divisible by 3 log "Fizz" instead of the number.
for (let i = 1; i <= 100; i++) {
 if (i % 3 === 0) 
  console.log("Fizz");
  else
 console.log(i);
}

// If a number is divisible by 5 log "Buzz" instead of the number.
for (let i = 1; i <= 100; i++) {
 if (i % 5 === 0) 
  console.log("Buzz");
  else
 console.log(i);
}

// If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.
for (let i = 1; i <= 100; i++) {
 if (i % 5 === 0 && i % 3 === 0)
  console.log("FizzBuzz");
  else
 console.log(i);
}

const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];

// Jim Clark decides that Kenny can't be named "Kenny" anymore. 
//Remove "Kenny" from the kenny array and replace it with "Gameboy".

const kenny = ["Kenny", 1000, "Austin"];
kenny[0] = "Gameboy";
console.log (kenny);

// Jim Clark just had his birthday; change jimClark's array to reflect him being a year older. 
//Don't just hard code 187--pretend that you didn't already know that his age is 186, and write your code to just make him a year older than whatever age he was.

const jimClark = ["Jim C", 186, "LA"];
const newAge = (jimClark[1] + 1);
jimClark[1] = newAge;
console.log(jimClark);

// Ryan is Batman maybe. Or possibly Robin. Change Ryan's hometown from "Denver" to "Gotham City".

const ryan = ["Ryan", 65, "Denver"];
ryan[2] = "Gotham City";
console.log(ryan);

// Reuben left Durham 5 years ago to come to Chicago. First, remove "Durham" from Reuben's array, 
// and then add "Chicago". (Note: remove and then add is different from simply changing the value at that index.)

const reuben = ["Reuben", 22, "Durham"];
reuben.pop(2);
reuben.push("Chicago");
console.log(reuben);

// Jim Haff could be literally anywhere in the world. Remove "All cities" from his array, then pick any 3 cities you like, and add them to Jim's array.
// If you did it in 3 lines of code that's fine, but see if you can do it in one line of code
const jimHaff = ["Jim H", 16, "All cities"];
jimHaff.splice(2, 1, ["Denver", "Miami", "Seattle"] )
console.log(jimHaff);

// Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
// Use a for loop to call .toUpperCase() on each of them and print out the result.
const ninjaTurtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']; 
  for (let i = 0; i < ninjaTurtles.length; i++) {
  ninjaTurtles[i] = ninjaTurtles[i].toUpperCase();}
console.log(ninjaTurtles);

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

// Kristyn's left shoe has traveled through time and space and turned up in Thom's accessories drawer! Remove Kristyn's shoe from the array and save it to the variable kristynsShoe. 
//Use that variable to add Kristyn's lost shoe to Thom's accessories array.
 let kristynsShoe = kristynsCloset[0];
thomsCloset.push(kristynsShoe);
console.log(thomsCloset);

// Modify your code to put together 3 separate outfits for Kristyn and Thom. 
//Put the output in a sentence to tell us what we'll be wearing. Mix and match!

console.log(kristynsCloset[3], kristynsCloset[4], kristynsCloset[6]);
consol.log(kristynsCloset[1], kristynsCloset[2], kristynsCloset[5]);
const thomsCloset1 = thomsCloset[0];
const thomsCloset2 = thomsCloset[1];
const thomsCloset3= thomsCloset[2];
console.log(thomsCloset1[1], thomsCloset2[1], thomsCloset3[1]);
console.log(thomsCloset1[2], thomsCloset2[0], thomsCloset3[2]);

// GA hoodie green pants marshmallow peeps
// cowboy boots right sock yellow hat
// dark grey button-up jeans raybans
// light blue button up grey jeans scarf

// Time to do laundry - loop through Kristyn's closet and log the sentence "WHIRR: Now washing (item)" for each item in the array.
for (let i = 0; i < kristynsCloset.length; i++) {
  console.log("WHIRR: Now washing " + kristynsCloset[i])
}


//Thom wants to do inventory on his closet. Using bracket notation, 
//log the arrays (not the elements in the arrays) containing all of Thom's shirts, pants, and accessories.

console.log(thomsCloset[0], thomsCloset[1], thomsCloset[2]);

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

var sum = 0;
for (var i = 0; i < 10; i++) 
  if (i % 3 === 0 || i % 5 === 0)
    sum = sum + i;
console.log(sum);

let sum = 0
for (let i; i < arr.length; i++) {
  sum += arr[i]
}
return sum
