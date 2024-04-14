const alien_color: string[] = ["green", "yellow", "red", "black"];

alien_color.forEach((color) => {
  if (color === "green") {
    console.log("Player just earned 5 points for shooting the green alien.");
  } else if (color === "yellow") {
    console.log(
      `Player just earned 10 points for shooting the ${color} alien.`
    );
  } else {
    console.log(
      `Player just earned 15 points for shooting the ${color} alien.`
    );
  }
});
