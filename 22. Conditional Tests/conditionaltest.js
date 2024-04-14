// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
var car = "Jaguar";
if (car === "Jaguar") {
    console.log("Is car === 'Jaguar'? I predict True.");
    console.log(car === "Jaguar");
}
var carModel = "Sedan";
if (carModel !== "Jaguar") {
    console.log("Is car !== 'Jaguar'? I predict false.");
    console.log(carModel === "Rolly Royce");
}
var age = 25;
if (age === 25) {
    console.log("Is age === 25? I predict True.");
    console.log(age === 25);
}
var age1 = 30;
var age2 = 25;
if (age1 > age2) {
    console.log("Is age1 > age2? I predict True.");
    console.log(age1 > age2);
}
var arr1 = [1, 2, 3, 4];
var arr2 = [1, 2, 3, 4];
if (arr1 !== arr2) {
    console.log("Is arr1 === arr2? I predict False.");
    console.log(arr1 === arr2);
}
var arr3 = ["Ali", "Sunny", "Hunny"];
var arr4 = ["Ali", "Sunny", "Hunny"];
if (arr3 !== arr4) {
    console.log("Is arr3 === arr4? I predict False.");
    console.log(arr3 === arr4);
}
var city = "New York";
if (city === "New York") {
    console.log("Is city === 'New York'? I predict False.");
    console.log(city !== "New York");
}
