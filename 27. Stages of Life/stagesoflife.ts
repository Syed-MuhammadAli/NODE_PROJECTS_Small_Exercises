const personAge: number = 83;

if (personAge < 2) {
  console.log(`person age is ${personAge} it means person is baby`);
} else if (personAge >= 2 && personAge < 4) {
  console.log(`person age is ${personAge} it means person is toddler`);
} else if (personAge >= 4 && personAge < 13) {
  console.log(`person age is ${personAge} it means person is kid`);
} else if (personAge >= 13 && personAge < 20) {
  console.log(`person age is ${personAge} it means person is teenager`);
} else if (personAge >= 20 && personAge < 65) {
  console.log(`person age is ${personAge} it means person is adult`);
} else {
  console.log(`person age is ${personAge} it means person is elder`);
}
