// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

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
// -------------------------------------------------------------------------------
// Array of magician's names
let magicians = ["Harry Houdini", "David Blaine", "Teller"];

// // Define the show_magicians function
const show_magicians = (magicians: string[]) => {
  magicians.forEach((magician, index) => {
    console.log(`Magician ${index + 1}: ${magician}`);
  });
};

// Define the make_great function
const make_great = (magicians: string[]) => {
  // Create a new array with modified magician names
  const greatMagicians = magicians.map((magician) => `the Great ${magician}`);
  return greatMagicians; // Return the new array
};

// Call the make_great function with a copy of the original array
let greatMagicians = make_great([...magicians]);

// Call the show_magicians function with the original array
console.log("Original Magicians:");
show_magicians(magicians);

// Call the show_magicians function with the modified array
console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
