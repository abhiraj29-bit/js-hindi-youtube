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
 
// console.log(Math.ceil(4.2)); // returns upper value 
// console.log(Math.floor(4.2)); // returns lower value
// console.log(Math.min(4,3,5,7)); // return minimum value 
// console.log(Math.max(4,3,5,7)); // returns maximum value 


// console.log(Math.random()); // this creates a random value between 0 to 1 
// console.log((Math.random()*10) + 1); // here math.random *10 takes care that the value is between 0 to 10 but what if the number was 0.04...something then if *10 then also it will not be betwen 0 to 10 ...hence we add 1 to make sure that value is between 0 to 10 
 
const min = 10 ;
const max = 20 ;
// console.log(Math.floor(Math.random()*10) + 1);   // this is used when you want to take integral values 
// console.log(Math.floor((Math.random()*(max-min+1))+min));   // this is used when a want vlaues between a range where you have to define values between max and min 
// therefore you can remember line 27 as a general syntax to find number between a range 



// *******DATES************
let myDate = new Date() ;
//console.log(myDate); // prints absurd value "2025-12-19T10:50:24.298Z"
//console.log(myDate.toDateString());  // prints Fri Dec 19 2025
//console.log(myDate.toLocaleDateString()); //prints 12/19/2025
// ##### IMPORTANT FOR INTERVIEW => 
//console.log(typeof(myDate)); // IT's an OBJECT
 

//ways to create a date 
 let myCreateDate = new Date(2025,11,19) ; // this is the way to create date using array indexing in 
// console.log(myCreateDate.toDateString()); // gives the result as Fri Dec 19 2025
// console.log(myCreateDate.toLocaleString()); // gives the result as 12/19/2025, 12:00:00 AM
// console.log(myCreateDate.toLocaleDateString()); // gives the result as 12/19/2025
let myNewDate = new Date("2025-12-19") ; // this is the YY/MM/DD format and you can change it to DD/MM/YY by changing it into 19-12-2025
// console.log(myNewDate.toLocaleDateString()); 
 
// time stamp (measured with resp to 1 JAN 1970)
let myTimeStamp = Date.now() ;
// console.log(myTimeStamp) ; // this gives the time in millisecond from 1 jan 1970 till the current (date+time) of your system 
// console.log(myCreateDate.getTime()); // this gives the time in millisecond from 1 jan 1970 till the date specified by you in the variable 

// if you want to get the time in seconds
// console.log(Math.floor(Date.now()/1000)); // this will convert time into sec 
let NewDate = new Date() ; // creates date wrt to current date of system 
// console.log(NewDate);
// console.log(NewDate.getMonth()); // returns month wrt to 0 indexing 
// console.log(NewDate.getMonth()+1); // we add 1 because we take months from 1-12 not 0-11
// console.log(NewDate.getDay()); // returns day from 0-6 indexing in a week
// console.log(NewDate.getDate()); //returns date in a month 

let DayName = NewDate.toLocaleString('default' , {
    weekday : "long" ,
})
console.log(DayName);
