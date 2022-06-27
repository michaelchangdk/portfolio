// Amanda's Tech Test

// PER - "SECRET" should return 4
// const comparePER = (line) => {
//   let days = 0;
//   for (let i = 0; i < line.length; i++) {
//     if (i % 3 === 0 && line[i] !== "P") {
//       days++;
//     } else if (i % 3 === 1 && line[i] !== "E") {
//       days++;
//     } else if (i % 3 === 2 && line[i] !== "R") {
//       days++;
//     }
//   }
//   console.log(days);
//   return days;
// };

// Earth orbits the sun in 365 days. Mercury orbits the planet in 687 days. Given two numbers where the first is Earth's date and the second is Mercury's date, find the number of days until both planets are on day 0.
// Example: [364, 686] = 1

// const daysUntilZero = (array) => {
//   let earth = array[0];
//   let mercury = array[1];
//   let days = 0;
//   if (earth === 365) {
//     earth = 0;
//   }
//   if (mercury === 687) {
//     mercury = 0;
//   }
//   while (earth !== 0 && mercury !== 0) {
//     earth++;
//     mercury++;
//     days++;
//   }
//   console.log(days);
//   return days;
// };

// const daysUntilZero = (line) => {
//   let earth = line.split(" ")[0];
//   let mercury = line.split(" ")[1];
//   let days = 0;
//   if (earth === 365) {
//     earth = 0;
//   }
//   if (mercury === 687) {
//     mercury = 0;
//   }
//   while (earth !== 0 && mercury !== 0) {
//     earth++;
//     mercury++;
//     days++;
//   }
//   console.log(days);
//   return days;
// };
