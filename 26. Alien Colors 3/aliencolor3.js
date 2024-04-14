var alien_color = ["green", "yellow", "red", "black"];
alien_color.forEach(function (color) {
    if (color === "green") {
        console.log("Player just earned 5 points for shooting the green alien.");
    }
    else if (color === "yellow") {
        console.log("Player just earned 10 points for shooting the ".concat(color, " alien."));
    }
    else {
        console.log("Player just earned 15 points for shooting the ".concat(color, " alien."));
    }
});
