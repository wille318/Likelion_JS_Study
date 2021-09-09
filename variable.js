// 1. User stricts
// added in ES 5
// use this for Balina Javascripts.
'use strict';

// 2. Variable 변수(변경될 수 있는 값)
// let(added in ES6) : 변수를 선언할 수 있는 유일한 수단
let globalName = 'global name'; // 광역변수
{ //지역변수
    let name = 'ellie'; // 변수 정의 및 선언
    console.log(name);
    name = 'hello'; // ellie 값 대신 hello를 저장함
    console.log(name);
}
console.log(name);
console.log(globalName);

// var (don't ever use this!) : 변수에 값을 할당하기 전에 쓸 수있음 
// var hoisting (move declaration from bottom to top) : 어디에 선언했는지에 상관없이 제일 위로 선언을 끌어올림
// var has no blcok scope :  var는 지역변수 선언이 불가능함. 지역변수 밖에서 선언해도 소환됨. 
console.log(age);
age = 4;
var age; 

console.losg(age);
let age; 

// 3. Contants : 한번 선언하면 값을 변경할 수 없음 (반대 : Mutable. let 변수)
// favor immutable(변경할 수 없음) data type always for a few reasons :
//  - security : 보안상의 이유 
//  - thread safety : 동시에 정보에 접근하여 값을 변경할 때를 대비하여
//  - reduce human mistakes : 실수 방지
const daysInWeek = 7;
const maxNumber= 5;

// 4. Variabel types
// primitive, single item : number, string, boolean, null, undefiedn, symbol
// object, box container : 싱글 아이템을 묶어 한 박스로 관리할 수 있게 하는 것
// function, first-class function : function이 데이터 타입으로서 변수에 할당 가능함. 함수의 파라미터(인자)로 전달/return type으로도 가능

const count = 17; // integer 정수
const size = 17.1; // decimal number 소수점
// 정수형 실수형 상관없이 number로 통일
console.log(`value:${count}, type:${typeof count}`);
console.log(`value:${size}, type:${typeof size}`);

// nubmer - speicla numberic values : infintiy, infinity, NaN(not a number)
const infintiy = 1/0; // 숫자/0 무한대 숫자 
const negativeInfinity = -1/0; // -숫자/0
const nAn = 'not a number' /2; // String/0
console.log(infintiy);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; //over (-2**53 ~ 2**52)
console.log(`value:${bitInt}, type:${typeof bintIng}`);
Number.MAX_SAFE_INTEGER;

//string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = 'hi ${brendan}!'; //template literals (string) : `기호를 이용하여 스트링과 변수의 값이 붙여져서 나옴
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true : any other value
const canRead = True;
const test = 3<1; //false
console.log(`value: ${canRead}, type : ${typeof canRead}`);
console.log(`value: ${test}, type : ${typeof test}`);

// null
let nothing = null; // null로 값이 할당됨
console.log(`value: ${nothing}, type : ${typeof nothing}`);

// undefined 
let x; //값이 할당되지 않아 빈 것인지, 값이 들어갈지 정해지지 않은 상태
console.log(`value: ${x}, type : ${typeof x}`);

// symbol, create unique identifiers for objects 
// 고유한 식별자를 구분할 때 사용
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1==symbol2); // false. 동일한 심볼로 작성했어도 다른 것으로 판별됨

const symbol1 = Symbol.for('id');
const symbol2 = Symbol.for('id');
console.log(symbol1==symbol2); // True. Symbol.for을 사용하면 동일한 심볼로 판별

// object, real-life object, data structure
const ellie = {name = 'ellie', age: 20};
ellie.age = 21;

// 5. Dynamic typing :  dynamically typed language
// Java, C는 변수 타입을 선언해줘야하는 반면, JS는 선언할 때 타입을 선언하지 않아도 동작할 때 알아서 판별
// 빠르게 프로토 타입할 때 장점. 규모있는 프로젝트/여러 개발자들이 개발할 때 단점
let text = 'hello'; // string type
console.log(text.charAt(0)); // 슬라이싱
console.log(`value: ${text}, type: ${typeof text}`);
text = 1; // 재정의 시 number type으로 변경
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5; // 문자열+숫자일시, 숫자를 문자로 인식
console.log(`value: ${text}, type: ${typeof text}`); // 75, string
text = '8'/'2'; // sting type의 숫자 / sting type의 숫자 는 string이지만 number로 인식하여 연산함
console.log(`value: ${text}, type: ${typeof text}`); // 4, number


