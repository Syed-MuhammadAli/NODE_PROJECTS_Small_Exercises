// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
var person1 = { name: "Ali", age: 36, gender: "Male" };
var person2 = { name: "ali", age: 25, gender: "male" };
if (person1.name !== person2.name) {
    console.log("".concat(person1.name, " is not same as ").concat(person2.name));
}
else {
    console.log("".concat(person1.name, " is same as ").concat(person2.name));
}
if (person1.name.toLowerCase() !== person2.name.toLowerCase()) {
    console.log("".concat(person1.name, " is not same as ").concat(person2.name));
}
else {
    console.log("".concat(person1.name, " is same as ").concat(person2.name));
}
if (person1.age === person2.age) {
    console.log("".concat(person1.name, " is same age as ").concat(person2.name));
}
else {
    console.log("".concat(person1.name, " is not same age as ").concat(person2.name));
}
if (person1.age > person2.age) {
    console.log("".concat(person1.name, " is older than ").concat(person2.name));
}
else {
    console.log("".concat(person1.name, " is not older than ").concat(person2.name));
}
var person3 = { name: "Ali", age: 36, gender: "Male", height: 5.9 };
var person4 = { name: "ali", age: 25, gender: "male", height: 5.9 };
if (person3.height >= person4.height) {
    console.log("person3 height ".concat(person3.height, " is either of same height or greater height than person4 height ").concat(person4.height));
}
else {
    console.log("May be person4 ".concat(person4.height, " is small than ").concat(person3.height));
}
var age1 = 30;
var age2 = 25;
if (age1 > 20 && age2 < 30) {
    console.log("Is age1 greater than 20 and age2 less than 30? True");
    console.log(age1 > 20 && age2 < 30);
}
if (age1 === 32 || age2 === 25) {
    console.log("Test 2: Is age1 equal to 30 or age2 equal to 25? True");
    console.log(age1 === 30 || age2 === 25);
}
var myArray = ["apple", "banana", "orange"];
if (myArray.includes("banana")) {
    console.log("Array contains the \n\tstring 'banana'.");
}
else {
    console.log("Array does not contain \n\tthe string 'banana'.");
}
