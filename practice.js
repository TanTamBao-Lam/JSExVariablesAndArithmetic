//declare variables and assign their values.
let computerModel = 'Mac Book Pro M1';
let salePrice = 2399.99;
let taxRate = 0.15;

//Calculated tax.
let calculatedTax = salePrice * taxRate;

//Calculate total price.
let total = salePrice + calculatedTax;

//Print out result.
console.log('');
console.log('******************************************');
console.log('Computer Moded: ' + computerModel);
console.log('Sale Price: ' + salePrice);
console.log('Tax: ' + calculatedTax);
console.log('Grand Total: ' + total);
console.log('******************************************');
