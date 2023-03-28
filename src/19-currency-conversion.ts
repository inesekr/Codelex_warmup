export {};

/**
 * Currency Formatting
 *
 * The business is now breaking into the Brazilian market
 * Write a new function for converting to the Brazilian real
 * They have also decided that they should add a 1% fee to all foreign transactions
 *
 * Additional Challange:
 * Find a way to add 1% to all currency conversions
 * (think about the DRY (don't repeat yourself) principle)
 * You are allowed to create your own functions
 * and use them in place of convertToUSD() and convertToBRL()
 */

const TRANSACTION_FEE = 0.01;
const EXCHANGE_RATE_USD: number = 1.06;
const EXCHANGE_RATE_BRL: number = 5.45; //uz  09.03.2023.

function convertToCurrency(price: number, exchangeRate: number): number {
  return price * exchangeRate;
}

function addFee(price: number): number {
  return price + price * TRANSACTION_FEE;
}

function formatPrice(price: number): string {
  return price.toFixed(2);
}

// You are allowed to change this function
// function convertToUSD(price: number): number {
//   const priceUSD: number = price * EXCHANGE_RATE_USD * TRANSACTION_FEE;
//   return priceUSD;
// }

// You are allowed to change this function
// function convertToBRL(price: number): number {
//   const priceBRL: number = Math.round(price * EXCHANGE_RATE_BRL * 100) / 100;
//if need to round it at this stage, before additional 1% fee
//   const priceBRLWithFee: number = priceBRL * TRANSACTION_FEE;
//   return priceBRLWithFee;
// }

const product = "You don't know JS";
const price = 12.52;
const priceInUSD = formatPrice(
  addFee(convertToCurrency(price, EXCHANGE_RATE_USD))
);
const priceInBRL = formatPrice(
  addFee(convertToCurrency(price, EXCHANGE_RATE_BRL))
);

console.log("Product: " + product);
console.log("Price: $" + priceInUSD);
console.log("Price: R$" + priceInBRL);

/* Expected output:

    > Product: You don't know JS
    > Price: $?
    > Price: R$?

*/
