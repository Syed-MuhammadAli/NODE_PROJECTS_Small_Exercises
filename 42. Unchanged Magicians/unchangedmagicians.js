// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Array of magician's names
// let magicians: string[] = ["Harry Houdini", "David Blaine", "Teller"];
// // Define the show_magicians function
// const show_magicians = (magicians: string[]) => {
//   magicians.forEach((magician, index) => {
//     console.log(`Magician ${index + 1}: ${magician}`);
//   });
// };
// // Define the make_great function
// const make_great = (magicians: string[]) => {
//   for (let i = 0; i < magicians.length; i++) {
//     magicians[i] = `the Great ${magicians[i]}`;
//   }
// };
// let greatMagicians = make_great([...magicians]);
// // Call the make_great function to modify the array of magicians
// make_great(magicians);
// // Call the show_magicians function with the modified array of magician's names
// show_magicians(magicians);
// // Define the show_magicians function
var show_magicians = function (magicians) {
    magicians.forEach(function (magician, index) {
        console.log("Magician ".concat(index + 1, ": ").concat(magician));
    });
};
// Define the make_great function
var make_great = function (magicians) {
    // Create a new array with modified magician names
    var greatMagicians = magicians.map(function (magician) { return "the Great ".concat(magician); });
    return greatMagicians; // Return the new array
};
// Array of magician's names
var magicians = ["Harry Houdini", "David Blaine", "Teller"];
// Call the make_great function with a copy of the original array
var greatMagicians = make_great(__spreadArray([], magicians, true));
// Call the show_magicians function with the original array
console.log("Original Magicians:");
show_magicians(magicians);
// Call the show_magicians function with the modified array
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
