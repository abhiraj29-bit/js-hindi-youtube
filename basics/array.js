const score = 400 
const balance = new Number(100) // syntax for creating a number 
// console.log(balance);
const a1 = balance.toString() 
// console.log(typeof(a1)) 
// console.log(balance.toFixed(2));

const otherNumber = 23.896
//console.log(otherNumber.toPrecision(3)); 
const anotherNumber = 123.896
// console.log(anotherNumber.toPrecision(3)); // 124 because in toPrecision the priority is the integer part not the fractional part so from integer part upto 3rd place itr rounds off
 const someNumber = 1234.896
// console.log(someNumber.toPrecision(3)); // output is 1.23e+3 means it keeps upto 3 signigficant digits 

// *********MATHS******