// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
var favThings = [
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
for (var _i = 0, favThings_1 = favThings; _i < favThings_1.length; _i++) {
    var element = favThings_1[_i];
    console.log("".concat(element));
}
favThings.forEach(function (element) {
    console.log(element);
});
var things = favThings.map(function (element) {
    console.log(element);
    return element;
});
