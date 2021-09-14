// 1. Use strict
// JavaScript is very flexibel
// flexible == dangorous
// added ECMAScript 5
// use this for Valina Javascript.
'use strict';       // 불안정한 자바스크립트의 ECMAScript에 따라 문법을 정제해주는 역할.

console.log('Hello world!');


// 2. Varialbe
// let (added in ES6)       let은 변수를 만들 때 사용한다.
let globalName = 'global name';     // 괄호 밖은 전역 변수
{       // 괄호를 사용하면 지역변수...
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
}
console.log(name);
console.log(globalName);
// var (don't ever use this!)       ES6 이후 변수를 선언할 때는 무조건 let으로 선언...
// var hoisting (move declaration from bottom to top)       위치에 상관 없이 해당 선언을 제일 위로 끌어올려줌.
// has no block scope


// 3. Constants
// 값을 선언함과 동시에 변경 불가능
// favor immutable data type always for a few reasons:
//  - security
//  - thread safety
//  - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;
// 결론적으로, 자바스크립트에서는 변수 선언 시 가변 타입의 let과 불변 타입의 const가 존재함.


// 4. Variable types
// primitive, single item: number. string, boolean, null, undefiend, symbol
// object, box container
// function, first-class function
// 자바스크립트의 숫자들은 모두 number 타입으로 할당됨... (자바처럼 정수형, 실수형 등등 없음)

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speicla numeric values: infinity, -infinity, NaN(Not a Number)
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ' type: ' + typeof helloBob);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);       // string과 달리 symbol은 내용이 동일하더라도 다르게 식별할 수 있음. 주어지는 String과 상관없음...
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const ellie = { name: 'ellie', age: 20 };
ellie.age = 21;


// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0));