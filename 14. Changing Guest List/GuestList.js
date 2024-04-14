var guestList = ["Muhammmad", "Umar", "abu bakr"];
var myGuest = guestList.map(function (guest) {
    console.log("Respected \"".concat(guest, "\", I would like to invite you to dinner."));
});
console.log("\nAnnouncment!".concat(guestList[1], " will not be with us tonight due to his busy scheduale\n"));
guestList.splice(1, 1, "Ali");
// console.log(guestList);
var newGuest = guestList.map(function (guest) {
    console.log("Respected \"".concat(guest, "\", I would like to invite you to dinner."));
});
