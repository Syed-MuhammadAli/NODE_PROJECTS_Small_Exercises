// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

type Person = { name: string; age: number; gender: string };

const person1: Person = { name: "Ali", age: 36, gender: "Male" };
const person2: Person = { name: "ali", age: 25, gender: "male" };

if (person1.name !== person2.name) {
  console.log(`${person1.name} is not same as ${person2.name}`);
} else {
  console.log(`${person1.name} is same as ${person2.name}`);
}

if (person1.name.toLowerCase() !== person2.name.toLowerCase()) {
  console.log(`${person1.name} is not same as ${person2.name}`);
} else {
  console.log(`${person1.name} is same as ${person2.name}`);
}

if (person1.age === person2.age) {
  console.log(`${person1.name} is same age as ${person2.name}`);
} else {
  console.log(`${person1.name} is not same age as ${person2.name}`);
}

if (person1.age > person2.age) {
  console.log(`${person1.name} is older than ${person2.name}`);
} else {
  console.log(`${person1.name} is not older than ${person2.name}`);
}

type Team2 = { name: string; age: number; gender: string; height: number };

const person3: Team2 = { name: "Ali", age: 36, gender: "Male", height: 5.9 };
const person4: Team2 = { name: "ali", age: 25, gender: "male", height: 5.9 };

if (person3.height >= person4.height) {
  console.log(
    `person3 height ${person3.height} is either of same height or greater height than person4 height ${person4.height}`
  );
} else {
  console.log(
    `May be person4 ${person4.height} is small than ${person3.height}`
  );
}

const age1: number = 30;
const age2: number = 25;

if (age1 > 20 && age2 < 30) {
  console.log("Is age1 greater than 20 and age2 less than 30? True");
  console.log(age1 > 20 && age2 < 30);
}

if (age1 === 32 || age2 === 25) {
  console.log("Test 2: Is age1 equal to 30 or age2 equal to 25? True");
  console.log(age1 === 30 || age2 === 25);
}

const myArray: string[] = ["apple", "banana", "orange"];

if (myArray.includes("banana")) {
  console.log(`Array contains the 
	string 'banana'.`);
} else {
  console.log(`Array does not contain 
	the string 'banana'.`);
}
