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
