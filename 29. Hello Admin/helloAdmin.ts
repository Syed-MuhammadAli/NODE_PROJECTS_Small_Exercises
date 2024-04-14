// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:

// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

type UserData = {
  name: string;
  role: string;
};

// Array of user data
const users: UserData[] = [
  { name: "muhammad_ali", role: "admin" },
  { name: "john_doe", role: "user" },
  { name: "emma_smith", role: "user" },
  { name: "alex_jones", role: "user" },
  { name: "lucy_williams", role: "user" },
];

// Loop through the array and print greetings
users.forEach((user) => {
  if (user.role === "admin") {
    console.log(`Hello ${user.name}, would you like to see a status report?`);
  } else {
    console.log(`Hello ${user.name}, thank you for logging in again.`);
  }
});
