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
