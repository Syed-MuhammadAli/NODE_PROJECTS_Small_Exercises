type Measurement = {
  size: string;
  message: string;
};

const make_shirt = (size: Measurement): void => {
  console.log(
    `The shirt size is ${size.size} and the message printed on it is: ${size.message}`
  );
};

// Call the function
make_shirt({ size: "XL", message: "Hello, World!" });
