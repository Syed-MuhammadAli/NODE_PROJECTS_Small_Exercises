// below is with fo of loop

const names = ["ali", "maria", "anwer", "moqsood"];

for (const name of names) {
  console.log(` This is ${name}`);
}

// Below is with .map method

const greetings = names.map((name) => {
  console.log(` This is ${name}`);
});
