// 절차적 언어 : 함수가 프로그램에서 중요한 기능 담당
// JS는 Class가 추가되었다 하더라도, 프로토타입을 기반으로 하여 절차적 언어에 해당됨. 

// Function
// - fundamental building block in the program 프로그램을 구성하는 기본적인 빌딩블록
// - sub-program can be used multiple times 여러번 재사용이 가능함
// - performs a task or calculaters a value 한가지의 일, 계산을 위해 사용됨
// + funtion 혹은 API(Application Programming Interface)를 쓸 때, 이름을 보고 어떤 일을 하는지 예상할 수 있음. 

// 1. Function declaration
// function name(param1, param2) {body... return;}
// one function === one thing 하나의 함수는 하나의 일만 하게 해야함
// nameing : doSometiong, command, verb 커맨드, 동사 형태로 이름을 지정해야함. 
// e.g. createCardAndPoint -> createCard, createPoint 두가지 일을 한번에 하지 말고, 2개의 함수로 나눌 수 있도록
// function is object in JS 오브젝트로 간주되어 변수로 할당 가능, 파라미터로 전달 가능, 함수 retrun 가능
function printHello(){
    console.log('Hello');
}
printHello();

function log(message){ //함수 자체를 인자로 넘겨줄 수 있음. 
    // but type이 중요한 경우, JS는 난해할 수 잆음. 데이터타입과 입력값의 형식이 어떤지 명시되어있지 않기 때문.
    console.log(message);
}
log('Hello@');

// 2. Parameters
// premitive parameters: passed by value 프리미티브 타입인 경우에 메모리에 저장되어 밸류가 전달됨
// object parameters: passed by reference 오브젝트 타입의 경우 메모리에 레퍼런스가 전달됨. 
function changeName(obj) {
    obj.name = 'coder';
}
const ellie = {name:'ellie'};
changeName(ellie);
console.log(ellie); //{name:'coder'}

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown'){ //두개의 파라미터를 받음. 

// // 만일 값이 들어오지 않았을 경우 unknown으로 표시해달라~ (=> from = 'unknown'과 같은 역할)
//     if(from === undefined) {
//         from = 'unknown';
//     } 

    console.log(`${message} by ${from}`);
}  
showMessage("Hi!"); // 하나의 파라미터만 들어가서, 나머지 하나(from)은 undefined로 쓰임

// 4. Rest parameters (added in ES6)
function printAll(...args){  // ...args => 배열 형태로 전달
    for (let i =0; i <args.length; i++){
        console.log(args[i]);
    }
    for (const arg of args) {
        console.log(arg);
    }
    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

// 5. Local scope
// 밖에서는 안이 보이지 않고, 안에서는 밖을 볼 수 있다.
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello';
    console.log(message); // local variable 
    console.log(globaMessage);
    function printAnother(){
        console.log(message); // 자식은 부모에게서 작성된 메시지를 확인할 수 있음
        let childMessage = 'hello';
    }
    console.log(childMessage); // 에러 발생
}
printMessage();

// 6. Retrun a value
function sum(a, b){
    return a+b;
}
const result = sum(1,2); // 3
console.log(`sun: ${sum(1,2)}`);
// return type이 없는 경우 : return undefined; 생략된 것

// 7. Early return, early exit
// bad : 블록 안에서 로직을 많이 작성하면 가독성이 떨어짐
function upgradeUser(user){
    if(user.point >10) {
        //log upgrade logic...
    }
}
// good : 조건이 맞지 않는 경우를 조건문으로 걸어 함수를 빨리 종료하고, 조건이 맞을 때만 필요한 로직을 실행하는 방법이 더 좋음.
function upgradeUser(user){
    if (user.point <= 10){ 
        return;
    }
    // long upgrade logic...
}

// first-calss function
// function are treated like any other variable
// can be assigned as a value to variable 변수에 할당 가능
// can be passed as an argument to other functions. 파라미터로 전달 가능
// can be returned by another function 리턴값으로 들어갈 수 있음

// 1. Function expression
// a function declaration can be called earlier than it is defiend.(hoisted) 함수정의 이전에 호출해도 가능함. (JS 엔진이 선언된 것을 제일 위로 올려주기 때문)
// a funtion expression is created when the execution reaches it. 할당된 부분 다음부터 호출가능
const print = function(){ // anonymous function 함수에 이름이 없는 것. 필요한 부분만 할당하여 변수에 저장
    console.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum ;
console.log(sumAgain(1,3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();
    } else {
        printNo();
    }
}
// anonymous function 
const printYes = function (){
    console.log('yes!');
};
// named function
// better debugging in debugger's stack traces 함수에 이름을 주면 디버깅할 때 편함
// recursions
const printNo = function print(){
    console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous 항상이름이 없는 함수. => 를 활용하여 짧게 쓸 수 있음. 
const simpleprint = function(){
    console.log('simplePrint!');
};
// =
const simpleprint = () =>console.log('simplePrint!');
const add = (a, b) => a+b; // 한줄 코딩 -> 블록{} 필요없음
const simpleMultiply = (a, b) =>{
    // do something more 여러줄 쓰려면 {}
    return a * b ;
}

// IIFE : Immediately Invoked Function Expression
(function hello(){
    console.log('IIFE');
})();
// 함수를 ()묶고, 호출하듯 ()를 붙여주면 선언과 동시에 호출됨. 
