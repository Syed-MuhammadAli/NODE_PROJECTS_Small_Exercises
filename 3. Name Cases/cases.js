var personName = "Syed Muhammad ALi";
var UC = personName.toUpperCase();
var LC = personName.toLowerCase();
var TC = personName.toLowerCase().replace(/\b\w/g, function (c) { return c.toUpperCase(); });
console.log(UC);
console.log(LC);
console.log(TC);
