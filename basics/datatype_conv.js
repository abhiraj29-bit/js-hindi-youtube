let score = "33abc" 
let valueInNumber = Number(score) // by this convert score which is string into number 
// console.log(valueInNumber);
// console.log(typeof valueInNumber) // by this you cann identify the type of the datatype 


// similarily you can convert other datatytpes 


 let isNumber = 1 ; // so this is a number 
 let isBooleanNumber = Boolean(isNumber) // this will convert number into boolean 
// console.log(isBooleanNumber);
// console.log(typeof isBooleanNumber);
   
// **************OPERATIONS***************
// console.log(2+3)
// console.log(2-3)
// console.log(2*3)
// console.log(2**3) this is for exponentiaton 
// console.log(2/3)
// console.log(2%3)

// incremental operators 1) x++ returns the value before incrementing 
//                      2) ++x increments the value and then returns 
 
// console.log(1+2+"4") this will output 34 
// console.log("1"+2+4); this will output 124 so we can conclude that whatever converison we want to do we shiuld write that first and then write other operations




// **********COMPARISONS OF DATATYPES*******************
// console.log("2" == 2); we can say equality does typeconverison when compared but null and undefined are the exceptional cases
// console.log(null > 0); > < >= <= these type of comparators always do the type converison before comparing 
// console.log(null >= 0);


//console.log("2" === 2); // triple equality does not dp type conversion and it is very strict
  

// console.log(undefined==0); //false
// console.log(undefined>=0);//false
// console.log(undefined>0);//false

// const myFunction = function(){ //this creates a function which is stored in a variable myFuncrtioin which cannot be reassigned 
//     console.log("Hello world")
//  } // this line is printed only when functioin is called 
// myFunction() // this line calls the function 
// console.log(typeof myFunction)


// const words = ["abhiraj","loves","nisha"] // this created an array 
// console.log(words); // prints the array 

let myName = "abhiraj chouhan"
anotherName = myName
anotherName = "nisha laxmi" 
// console.log(myName); output is abhiraj chouhan because writing myname in another name crerates a copy of that so it doesnt changeb the originsl 
// console.log(anotherName); output is nisha laxmi 
  



let userOne = { // this line creates an object and userone is stored in stacks and its referrence is taken from heap where the oject is stored 
    email: "abhiraj9@gmail.com" ,
    upi: "user@ybl"
}
let userTwo = userOne 
userTwo.email = "chouhan9@gmail.com" // as in object it takes reference from heap memory so it will change the original values also 
// console.log(userOne); output is chouhan9@gmail.com
// console.log(userTwo); output is chouhan9@gmail.com

