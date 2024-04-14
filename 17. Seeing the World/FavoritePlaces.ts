const favoritePlaces: string[] = [
  "Morocco",
  "Azerbaijan",
  "Saudi Arabia",
  "Dubai",
  "Albania",
];

console.log(favoritePlaces);

const sortedPlaces: string[] = favoritePlaces.slice().sort();

console.log("sorted Places:", sortedPlaces);
console.log("favoritePlaces:", favoritePlaces);

const reversedPlaces: string[] = favoritePlaces.slice().sort().reverse();

console.log("reversedPlaces:", reversedPlaces);
console.log("favoritePlaces:", favoritePlaces);

const reversedPlaces2: string[] = favoritePlaces.reverse();

console.log("reversedPlaces2:", reversedPlaces2);

const reversedPlaces3: string[] = favoritePlaces.reverse();

console.log("favoritePlaces3:", reversedPlaces3);

const sortedPlaces2: string[] = favoritePlaces.sort();

console.log("sortedPlaces2:", sortedPlaces2);

const reversedSorted = favoritePlaces.sort().reverse();
console.log("reversedSorted:", reversedSorted);
