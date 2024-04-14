// below is with fo of loop
var names = ["ali", "maria", "anwer", "moqsood"];
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    console.log(" This is ".concat(name_1));
}
// Below is with .map method
var greetings = names.map(function (name) {
    console.log(" This is ".concat(name));
});
