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
console.log("\nAnnouncment! I found a bigger dinner table.\n");
guestList.unshift("Umar");
console.log(guestList);
guestList.splice(2, 0, "Hassan");
guestList.push("Hussain");
console.log(guestList);
var newGuest2 = guestList.map(function (guest) {
    console.log("\nRespected \"".concat(guest, "\", I would like to invite you to dinner.\n"));
});
