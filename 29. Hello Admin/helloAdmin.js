// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// Array of user data
var users = [
    { name: "muhammad_ali", role: "admin" },
    { name: "john_doe", role: "user" },
    { name: "emma_smith", role: "user" },
    { name: "alex_jones", role: "user" },
    { name: "lucy_williams", role: "user" },
];
// Loop through the array and print greetings
users.forEach(function (user) {
    if (user.role === "admin") {
        console.log("Hello ".concat(user.name, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(user.name, ", thank you for logging in again."));
    }
});
