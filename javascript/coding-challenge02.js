//coding challenge #01

// let massMark = 78;
// let heightMark = 1.69;
// let massJohn = 92;
// let heightJohn = 1.95;

//data 2
let massMark = 95;
let heightMark = 1.88;
let massJohn = 85;
let heightJohn = 1.76;

let BMIsMark = massMark / heightMark ** 2;
let BMIsJohn = massJohn / ( heightJohn * heightJohn);
let markHigherBMI = BMIsMark > BMIsJohn;
console.log(BMIsMark, BMIsJohn,markHigherBMI);

//coding challenge #02
if (markHigherBMI){
    console.log( `Mark's BMI (${BMIsMark}) is higher than John's (${BMIsJohn})!`)
} else{
    console.log( `John's BMI (${BMIsJohn}) is higher than Mark's (${BMIsMark})!`)
}
