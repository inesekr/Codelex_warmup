export {};

/**
 * So far you've learned all about functions, arrays, objects and that's a lot already!
 * The rest of the exercises here are for you to practice some more before moving on to
 * the more complicated exercises in this course.
 */

/**
 * How to convert temperature -> https://en.wikipedia.org/wiki/Conversion_of_units_of_temperature
 *
 * Create two functions fahrenheitToCelsius & celsiusToFahrenheit
 *
 * Temperature should be rounded to one decimal place: i.e., fahrenheitToCelsius(100) should return 37.8 and not 37.77777777777778.
 */

//C=(F-32)*5/9;
//F=(c*9/5)+32;
const fahrenheitToCelsius = (F: number) =>
  Math.round((((F - 32) * 5) / 9) * 10) / 10;
const celsiusToFahrenheit = (C: number) =>
  Math.round(((C * 9) / 5 + 32) * 10) / 10;

console.log(fahrenheitToCelsius(32)); // Expected result: 0
console.log(celsiusToFahrenheit(0)); // Expected result: 32

console.log(fahrenheitToCelsius(100)); // Expected result: 37.8