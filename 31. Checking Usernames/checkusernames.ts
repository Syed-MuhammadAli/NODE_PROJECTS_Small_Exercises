const current_users: string[] = [
  "admin",
  "user",
  "guest",
  "developer",
  "manager",
];

const new_users: string[] = [
  "muhammad",
  "User",
  "guest",
  "developer",
  "MANAGER",
];

for (const new_user of new_users) {
  if (
    current_users
      .map((user) => user.toLowerCase())
      .indexOf(new_user.toLowerCase()) !== -1
  ) {
    console.log(`${new_user} username is not available.`);
  } else {
    console.log(`${new_user} username is available.`);
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
