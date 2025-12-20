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

const name = "  abhiraj  " 
const repoCount = 50 
// console.log(`hello name is ${name} and my repo count is ${repoCount}`); // this is called string interpolation 
// console.log(name.charAt(0)); 
const newString = name.substring(0,4) // here 0 is inclusive but 4 is not 
// console.log(newString);

const anotherString = name.slice(-6,4) // "size+index" will be the start point and if the start point is <0 then it will be teated as 0 only 
// console.log(anotherString);

const String1 = name.trim() // trims the leading and trailing spaces and doesnot changes the orginal string "name"
// console.log(String1); // output is "abhiraj"
// console.log(name); // output is "  abhiraj  v"
   

// ************VARIOUS STRING PROPERTIES *********

// name.toUpperCase() => converts to upper case 
// name.toLowerCase() => converts to lower case 
// name.includes("abhi") => checks if a substring is present in a string or not ...here output is true 
// name.indexOf("i") => output is 3 


const GirlFriend= "abhiraj hates hates hates nisha"
 // GirlFriend.replace("hates","loves") // writing just this wwont give the reulsts because you are not storing the results
 const res = GirlFriend.replace("hates","loves") // now you store the results 
 //console.log(res);// output is abhiraj loves hates hates nisha ...so you can see that it replaces only one hates
 const ans = GirlFriend.replaceAll("hates","loves")
 //console.log(ans); // now the output is abhiraj loves loves loves nisha
 
// ******** SPLIT IN STRING (IMP FOR INTERVIEW) 
const str = "The quick brown fox" 
const res1 = str.split("") // creates an array with each word and spaces as an individual element 
const res2 = str.split(" ") 
console.log(res2[3]); // creates a array with spaces as condition for split and hence the array is ['the','quick','brown','fox'] 

// ******in short if separatorn is not given then the whole stering becomes the single element of the array 
