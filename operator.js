// 1. String concatenation 
console.log('my' +' cat');       //  -> + 기호를 이용해 문자열을 더할 수 있다.
console.log('1' +2);            //숫자가 문자열로 변환되어 합쳐짐
console.log(`string literals: 1 + 2 = ${1 + 2}`); 
// ${변수}를 계산해서 String으로 포함되어 문자열을 만들 수 있음 
// ` `에 둘러쌓임 => 쉽게 줄바꿈 가능
console.log("ellie\'s book");  
// 싱글코트(`)로 문자열을 만들때, 중간의 `와 특수기호가 인식이 되지 않는다.  => \이용해표시 => ex. `ellie\`s book`
// \n: 줄바꿈 
// \t: tab 키

////////////////////////////////////////////////////////////////////
// 2. Numeric operators  
console.log(1 + 1); // add 
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(1 % 1); // remainder 
console.log(1 ** 1); // exponentiation

////////////////////////////////////////////////////////////
// 3. Increment and decrement operators
let counter = 2; 

// 1) Increment (++)
// 1)-1. perIncrement
const perIncrement = ++counter;    
// counter = counter +1;     //counter의 값을 1 증가시킨 뒤
// preIncrement = counter;   //preIncrement에 counter값을 할당함
console.log(`perIncrement: ${perIncrement}, counter: ${counter}`); // 3 3
// 1)-2. postIncrement 
const postIncrement = counter++;
// postIncrement = counter;   //먼저 counter 변수의 값을 postIncrement에 할당한 다음
// counter = counter +1;     // counter의 값을 1 증가
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`); // 3 4

// 2) Decrement (--)
// 2)-1. preDecrement
const perDecrement = --counter;
console.log(`preDecrement: ${perDecrement}, counter: ${counter}`);  // 3 3
// 2)-2. postDecrement
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);  // 3 2

///////////////////////////////////////////////////////////////////////
// 4. Assignment operators  (할당하는 operators)
let x = 3;
let y = 6;
x += y;  // x = x + y
x -= y; 
x *= y;
x /= y;

////////////////////////////////////////////////////////////////////
// 5. Comparison operators (비교 operators)
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

///////////////////////////////////////////////////////////////////
// 5. Logical operators: || (or), && (and), ! (not)   (논리 연산자)
const value1 = true;
const value2 = 4 < 2;

// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`); //3개 중 하나만 있어도 true로 계산
// 연산을 많이 하는 함수를 호출하는 것들 제일 앞에다 두면 안됨 -> 가장 simple한  value값들 부터 먼저 출력되는게 좋음, heavy한 것들 앞에 두면 x

// %% (and), finds the first falsy value
console.log(`or: ${value1 && value2 && check()}`); //3개가 다 옳아야지 true로 계산

// && - null 체크할때도 많이 쓰임
// often used to compress long if-statement
// nullableObject && nullableObject.something -> object가 null이면 뒤에 가 실행이 안됨. 즉 null object가 null이 아닐때만 something이란 것을 받아오게 됨
// if (nullableObject != null){
//     nullableObject.something;
// }

function check() {
    for (let i = 0; i <10; i++) {
        //wasting time
        console.log(`☆`);
    }
    return true;
}

// ! (not)  -> 값을 반대로 바꿔줌 
console.log(!value1);

//////////////////////////////////////////////////////////////////////////////////////
// 7. Equality
const stringFive ='5';
const numberFive = 5;

// == loose equality, with type conversion    -> type을 변경해서 같은 type으로 생각하고 검사
console.log(stringFive == numberFive);   // true
console.log(stringFive != numberFive);  // false

// === string equality, no type conversion   -> type을 신경써서 type이 다르면 다른 애들로  => 왠만하면 이걸로 사용
console.log(stringFive === numberFive);  // false
console.log(stringFive !== numberFive);  // ture

// object equality by reference
// === 공부할 때는 object를 신경써서 공부해야 함
// object가 메모리에 탑재될 떄 reference로 저장됨 -> 1과 2가 'ellie'라는 같은 이름의 object를 가지고 있지만 서로 다른 object임
const ellie1 = { name: 'ellie'}; 
const ellie2 = { name: 'ellie'};
const ellie3 = ellie1    // ellie1과 ellie3는 같은 reference를 가지고 있다 
console.log(ellie1 == ellie2);    // false - 각각 다른 reference를 가지고 있기 때문
console.log(ellie1 === ellie2);  // false  -각각 다른 reference를 가지고 있기 때문
console.log(ellie1 === ellie3); //true

// equality - puzzler
console.log(0 == false);   // true  //o, null, undefined, ' '(empty string)  -> false로 간주
console.log(0 === false);  // false ( 0은 boolean type이 아니기 때문)
console.log('' == false);  // true
console.log('' === false); // false
console.log(null == undefined);   // true
console.log(null === undefined);  // false

////////////////////////////////////////////////////////////////////////////
// 8. Conditional operators: if
// if, else if, else
const name = 'ellie';
if ( name === 'ellie') {
    console.log('Welcome, Ellie!');
} else if (name === 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unkwnon');
}

/////////////////////////////////////////////////////////////
// 9. Ternary operator: ? (if를 좀 더 간단하게 쓸수 있는 방법) 
// condition ? value1 : value2;   (true면 value1, false면 value2)
console.log(name === 'ellie' ? 'yes'  : 'no');

////////////////////////////////////////////////////////////
// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// uer for multiple type checks in TS
const brower = 'IE';
switch (brower) {       // switch 안에 있는 값이 아래 case와 같은 값이 있으면 출력, 
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':   // 같은 console를 출력하면 case를 연달아 사용할 수 있다.
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

////////////////////////////////////////////////////////////
// 11. Loops - 반복문
// while loop, while the condition is truthy,
// body code is excuted.
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition
// 먼저 블록을 실행한 다음에 조건이 맞는지 안맞는지를 검사
// 현재 i = 0;
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

// for loop
// for(begin; condition; step)  -> begin을 처음 한번만 호출함 
for (i = 3; i >0; i--) {
    console.log(`for: ${i}`);
}

for (let i =3; i >0; i =i-2){
    // inline variable declaration - for 안에 let이라는 지역변수를 선언
    console.log(`inline variable for: ${i}`);
}

// nested loops - for문 안에 for을 작성
for (let i = 0; i <10; i++){
    for (let j =0; j <10; j++){
        console.log(`i: ${i}, j:${j}`);
    }
}

// break (loop끝냄), continue(지금것만 skip하고 다음것) -> loop 멈출 수 있음