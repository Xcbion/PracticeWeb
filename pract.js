// //Adding two numbers
// const sum = (a,b) => a+b;
// console.log(sum(4,5))
// Find the First 10 odd numbers
// let i = 1;
// let odd;
// for (i=1;i<=10;i++){
//     odd = (2*i - 1);
//     console.log(odd);
// }

//First 10 even number print
// let even;
// for (let i=1;i<=10;i++){
//     even = (2*i);
//     console.log(even);
// }

//Check odd or even

// let check = num =>{
// if (num % 2 === 0) {
//   console.log("even");
// } else {
//   console.log("odd");
// }
// }
// console.log(check(7));
// console.log(check(45678765432));
// const prompt = require("prompt-sync")({ sigint: true });
// const num = prompt("Enter the number: ");
// const result = (num % 2 == 0) ? "even": "odd";
// console.log(`The number is ${result}`);


//Find out if number is Prime or not
// const prime = function(num){
//     if (num === 1) return false;
//     else if (num === 2) return true;
//     else {
//         for (let i=2;i<num;i++) if(num%i === 0) return false;
//         return num >= 2;
//     }
// }
// console.log(prime(21));
function primenumber(){
let ct = 0;
let j = 1;
let i = 1;
let n = 0;
while(n<100){ //never put I and j
    ct = 0;
    j = 1;
    while(j<=i){
        if(i%j===0)
        ct++;
        j++
    }
    if (ct===2){
        console.log(i);
    }
    n++;
    i++;
}
}
console.log(primenumber());