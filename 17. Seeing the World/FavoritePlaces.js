var favoritePlaces = [
    "Morocco",
    "Azerbaijan",
    "Saudi Arabia",
    "Dubai",
    "Albania",
];
console.log(favoritePlaces);
var sortedPlaces = favoritePlaces.slice().sort();
console.log("sorted Places:", sortedPlaces);
console.log("favoritePlaces:", favoritePlaces);
var reversedPlaces = favoritePlaces.slice().sort().reverse();
console.log("reversedPlaces:", reversedPlaces);
console.log("favoritePlaces:", favoritePlaces);
var reversedPlaces2 = favoritePlaces.reverse();
console.log("reversedPlaces2:", reversedPlaces2);
var reversedPlaces3 = favoritePlaces.reverse();
console.log("favoritePlaces3:", reversedPlaces3);
var sortedPlaces2 = favoritePlaces.sort();
console.log("sortedPlaces2:", sortedPlaces2);
var reversedSorted = favoritePlaces.sort().reverse();
console.log("reversedSorted:", reversedSorted);
