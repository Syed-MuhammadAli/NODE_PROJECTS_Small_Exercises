var current_users = [
    "admin",
    "user",
    "guest",
    "developer",
    "manager",
];
var new_users = [
    "muhammad",
    "User",
    "guest",
    "developer",
    "MANAGER",
];
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    if (current_users
        .map(function (user) { return user.toLowerCase(); })
        .indexOf(new_user.toLowerCase()) !== -1) {
        console.log("".concat(new_user, " username is not available."));
    }
    else {
        console.log("".concat(new_user, " username is available."));
    }
}
// for (const new_user of new_users) {
//   let usernameExists = false;
//   for (const current_user of current_users) {
//     if (new_user.toLowerCase() === current_user.toLowerCase()) {
//       usernameExists = true;
//       break;
//     }
//   }
//   if (usernameExists) {
//     console.log(`${new_user} username is not available.`);
//   } else {
//     console.log(`${new_user} username is available.`);
//   }
// }
