let guestList: string[] = ["Muhammmad", "Umar", "abu bakr"];

const myGuest = guestList.map((guest) => {
  console.log(`Respected "${guest}", I would like to invite you to dinner.`);
});

console.log(
  `\nAnnouncment!${guestList[1]} will not be with us tonight due to his busy scheduale\n`
);

guestList.splice(1, 1, "Ali");

// console.log(guestList);

const newGuest = guestList.map((guest) => {
  console.log(`Respected "${guest}", I would like to invite you to dinner.`);
});

console.log(`\nAnnouncment! I found a bigger dinner table.\n`);

guestList.unshift("Umar");
console.log(guestList);

guestList.splice(2, 0, "Hassan");
guestList.push("Hussain");
console.log(guestList);

const newGuest2 = guestList.map((guest) => {
  console.log(
    `\nRespected "${guest}", I would like to invite you to dinner.\n`
  );
});
console.log(
  `Announcment! Dear "${guestList}" unfortunately due to late arrival of our new dinner table we can invite only two peoples at a time.\n`
);

for (let i = guestList.length; i > 2; i--) {
  let removedGuest = guestList.pop();
  console.log(
    `\nAnnoucement! Apologies Mr.${removedGuest} for inconvenience you invitation has be rescheduale\n`
  );
}

let finalGuest = guestList.map((guest) => {
  console.log(`Mr."${guest}" you are still invited`);
});

guestList.splice(0, 2);
console.log(guestList);
