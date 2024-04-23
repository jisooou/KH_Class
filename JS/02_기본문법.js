/*
// 변수 만들기----------------------

// 전역변수 (함수 외부에 만든 변수는 전역변수)
let x = 10;
x = 20;

const y = 10;
// y = 20;    //재할당 불가능

function f01(){
  //지역변수
  var x = 30;
  //window는 전역변수에 들어가 있으니까
  console.log(window.x);
}


// let : 일반적인 변수
// const : final 변수
*/


//호이스팅

// console.log(x);
// var x = 10;

function f01(){

  if(true){
    let x = 10;
  }

  if(true){
    console.log(x);
  }

}

f01();