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
console.log("Announcment! Dear \"".concat(guestList, "\" unfortunately due to late arrival of our new dinner table we can invite only two peoples at a time.\n"));
for (var i = guestList.length; i > 2; i--) {
    var removedGuest = guestList.pop();
    console.log("\nAnnoucement! Apologies Mr.".concat(removedGuest, " for inconvenience you invitation has be rescheduale\n"));
}
var finalGuest = guestList.map(function (guest) {
    console.log("Mr.\"".concat(guest, "\" you are still invited"));
});
guestList.splice(0, 2);
console.log(guestList);
