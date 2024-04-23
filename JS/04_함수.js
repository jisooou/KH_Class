//선언적 함수
function f01(x){
  return x+1;
}

//익명 함수
//익명 함수는 변수에 담아준다.
const f02 = function(){
  return x+1;
}

//화살표 함수
// const f03 = (x) => {
//   return x+1;
// }
// 아래 두 코드는 같은 코드이다. 
// const f03 = (x) => {return x+1;}
const f03 = x => x+1;

// result01 = f01(10);
// result02 = f02(10);
// result03 = f03(10);

// console.log(result01);
// console.log(result02);
// console.log(result03);

// =========================================================

const printNum = function(x){
  console.log(x);
  console.log(arguments);
}

printNum(123, 200, 300);

// =========================================================

function getTen(){
  return printNum;
}

const result = getTen();
// console.log(result);

// result(777);

// =========================================================

// function hello(){
//   console.log("안녕!");
// }
// const hi = hello;
// hi();

// const x = undefined;
// console.log(typeof x);

// =========================================================

// console.log(3/2);
// console.log(3/0);

// const calcResult = 3/2;  //1.5 == 일반적인 숫자 == Finite == 인피니티 아님
// const calcResult = 3/0;   //Infinity
// const isFiniteResult = isFinite(calcResult);
// console.log(isFiniteResult);

// const calcResult = 1+2;
// console.log(calcResult);

// const calcResult = 1 / "hello";
// console.log(isNaN(calcResult));

// const calcResult = 1 / 5;
// console.log(isNaN(calcResult));

console.log("1" + 2);
console.log("abc" * 2);
console.log(0 == "0");
console.log(0 === "0");
console.log(0 == []);
console.log("0" == []);

