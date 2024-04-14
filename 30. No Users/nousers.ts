// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

//* with for...of loop
// const usernames: string[] = [" "];

// for (let user of usernames) {
//   if (user === "admin") {
//     console.log(`Hello admin, would you like to see a status report?`);
//   } else if (user === " ") {
//     console.log(`We need to find some users!`);
//   } else {
//     console.log(`Hello ${user}, thank you for logging in again.`);
//   }
// }

// //* with forEach method
// const usernames: string[] = ["admin", "Jane", "Jack", "Jill", "Joe"];
const usernames: string[] = [];

if (usernames.length > 0) {
  usernames.forEach((user) => {
    if (user === "admin") {
      console.log(`Hello admin, would you like to see a status report?`);
    } else {
      console.log(`Hello ${user}, thank you for logging in again.`);
    }
  });
} else {
  console.log(`We need to find some users!`);
}
