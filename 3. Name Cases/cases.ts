let personName: string = "Syed Muhammad ALi";

let UC = personName.toUpperCase();
let LC = personName.toLowerCase();
let TC = personName.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());

console.log(UC);
console.log(LC);
console.log(TC);
