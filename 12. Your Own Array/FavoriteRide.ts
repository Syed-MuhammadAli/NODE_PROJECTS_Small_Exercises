const favoriteRide: string[] = [
  "Honda Gold Wing",
  "Kawasaki Ninja H2R",
  "Bombardier Global 7500",
  "Aston Martin DB11",
  "Porsche 911 GT3 RS",
];

//* with standard loop
// for (let i = 0; i < favoriteRide.length; i++) {
//   console.log(`I would like to own a ${favoriteRide[i]}`);
// }

//* with for off loop
// for (let myRide of favoriteRide) {
//   console.log(`I would like to own a ${myRide}`);
// }

//* with map method
const myFavoriteRide = favoriteRide.map((ride) => {
  console.log(`I would like to own a ${ride}`);
});
