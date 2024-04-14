// const alien_color: string[] = ["green", "yellow", "red"];

// alien_color.map((color) => {
//   if (color === "green") {
//     console.log("Player just earned 5 points for shooting the green alien.");
//   } else {
//     console.log(
//       `Player just earned 10 points for shooting the ${color} alien.`
//     );
//   }
// });

const alien_color: string[] = ["green", "yellow", "red"];

for (const color of alien_color) {
  if (color === "green") {
    console.log("Player just earned 5 points for shooting the green alien.");
    break; // Exit the loop early if the condition is true
  } else {
    console.log(
      `Player just earned 10 points for shooting the ${color} alien.`
    );
  }
}
