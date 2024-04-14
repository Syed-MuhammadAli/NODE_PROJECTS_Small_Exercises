const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Loop through the array
for (const number of numbers) {
  // Determine the ordinal ending for each number
  let ordinalEnding: string;
  if (number === 1) {
    ordinalEnding = "st";
  } else if (number === 2) {
    ordinalEnding = "nd";
  } else if (number === 3) {
    ordinalEnding = "rd";
  } else {
    ordinalEnding = "th";
  }

  // Print the number with its ordinal ending
  console.log(`${number}${ordinalEnding}`);
}
