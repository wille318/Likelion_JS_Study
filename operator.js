// 1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 1+2 = ${1+2}`);

// 2. Numeric operators
console.log(1+1); // add
console.log(1-1); // substract
console.log(1/1); // divide
console.log(1*1); // multiply
console.log(5%2); // remainder
console.log(2**3) // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter +1;
// preIncrement = counter;
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter+1;

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x+y
x == y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10<6); // less than
console.log(10<6); // les than or equal
console.log(10>6); // greater than
console.log(10>=6); // greater than or equal

// 6. Logical operators : ||(or), &&(and), !(not)
const value1 = false;
const vlaue2 = 4<2;

console.log(`or : ${value1 || value2 || check()}`)
// console.log(`or : ${value1 && value2 && check()}`)
    // often used to compress log if-statement
    // nullableObject && nullableObjects.someting

function check(){
    for(let i=0; i <1; i++){
        //wasting time
        console.log("ㅠ"); // value1이 true라 그냥 true로 반환함
    }
    return true;
}

// !(not)
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive); // O
console.log(stringFive != numberFive); // X

// === stric equality, no type conversion
console.log(stringFive === numberFive); // X
console.log(stringFive !== numberFive); // O

// object equality by reference
const ellie1 = { name :'ellie'};
const ellie2 = { name :'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2); //false
console.log(ellie1 === ellie2); //false
console.log(ellie1 === ellie3); //true

// equality - puzzler
console.log(0 == false); //true
console.log(0 == false); //false
console.log('' == false); //true
console.log('' === false); //false
console.log(null == undefined); //true
console.log(null === undefined); //false

// 8. Conditional operators : if
// if, else if, else
const name = 'ellie';
if(name === 'ellie'){
    console.log("Welcome, Ellie!");
}else if (name === 'coder'){
    console.log('You are amazing coder');
}else {
    console.log('unkwnon');
}

// 9. Ternary operator : ?
// condition? value1 : value2 ;
console.log(name === 'ellie' ? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const brower = 'IE';
switch(brower) {
    case "IE":
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
    default:
        console.log('same all!');
        break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i =3;
while (i>0){
    console.log(`while:${i}`);
    i--;
}

// do while loop, body code is execute first, 
// than check the condition.
do{
    console.log(`do while: ${i}`);
    i--;
} while(i>0);

// for loop, for(begin; condiion; step)
for (i=3; i>0;i--){
    console.log(`for: ${i}`);
}
for(let i=3; i>0;i=i-2){
    //inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loops
for(let i=0; i<10; i++){
    for (let j = 0;j<10;j++){
        console.log(`i:${i}, j:${j}`)
    }
}

//break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i<11;i++){
    if(i%2!==0) {
        continue;
    }
    console.log(`q1. ${i}`);
}
// Q2. iterate from 0 to 10 and print nubmers util reaching 8(use break)
for(let i = 0; i <11;i++){
    if(i>8){
        break;
    }
    console.log(`q2.${i}`);
}