/*
! Topics will be revised:
? data-type & typeof operator 
? Variable -declaration 
? template-literals
? Unary PlusAnd Negation Operators
? Arithmetic-operators
? Assignment-operator
? logical-operators
? comparison-operator
? nullish && logical-operators 
*/ 
let name = "yasser";
const numbers = 12345678910; // can't be changed by Assignment-operatoring
console.log(name);
console.log(`my name is "${name}"`);
name = "ahmed"; // changed value to ahmed by assigment-operator
console.log(`my name is "${name}"`); // template-literals
console.log(`my number is "${numbers}"`); 
let _null= null; 
console.log(typeof _null); // typeof 
let Number = "1000000000";
console.log(Number);
// by using urnary condition
console.log(+Number);
console.log(1/2); // divisions
console.log(1-2); // substracting
console.log(1+2); // adding
console.log(1*2); // multpilying
console.log(1%2); // Reminder of division
let  i = 2;
console.log(i); // Before incrementing
i++
console.log(i); // After increment
console.log(i>1); // is i more than  1
console.log(i<1); // is i less than  1
console.log(i==1); // is i equal to 1 ? 
console.log(i<=1); // is i less than or equal to 1 ? 
console.log(i==1); // is i equal to 1 in value ? 
console.log(i===1); // is i equal to 1 in value & Data-type ? 
console.log(i>=1); // is i more than or equal to 1 ? 
// null-safety 
// Syntax: variable = value || backup-value
let n1 = null ?? 2;
console.log(n1);
