// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

const favThings: string[] = [
  "K2",
  "Nile River",
  "Saudi Arabia",
  "Tokyo",
  "London",
  "Arabic",
  "Australia",
  "Istanbul ",
  "Nanga Parbat",
];

for (let element of favThings) {
  console.log(`${element}`);
}

favThings.forEach((element: string) => {
  console.log(element);
});

const things = favThings.map((element: string) => {
  console.log(element);
  return element;
});
