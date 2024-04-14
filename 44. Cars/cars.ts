// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

// Define the function to store car information
const storeCarInfo = (
  manufacturer: string,
  model: string,
  ...options: string[]
): any => {
  const car: any = { manufacturer, model }; // Create a car object with manufacturer and model

  // Loop through the options and add them to the car object
  options.forEach((option) => {
    const [key, value] = option.split(":"); // Split each option into key-value pairs
    car[key.trim()] = value.trim(); // Add the option to the car object
  });

  return car; // Return the car object
};

// Call the function with required information and additional options
const carInfo = storeCarInfo("Toyota", "Camry", "color: blue", "year: 2022");

// Print the object to verify the information stored
console.log(carInfo);
