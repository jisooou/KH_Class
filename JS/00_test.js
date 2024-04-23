console.log("hi world ~ !");

function sayHello(){
  alert("hello~~~~~~~");
}

const x = document.querySelector("#target");
x.style.backgroundColor = "red";
// console.log(x);

// 개인 연습용
function touch(){
  // alert("주의!!");

  // 요소 얻기 
  const t = document.querySelector("#touch");
  // 요소 다루기 
  t.style.backgroundColor = "blue";

}
// -----------------------

function changeColor(){
  const x = document.querySelector("#target");
  x.style.backgroundColor = "red";
  x.innerText = "JavaScript";
  // console.log(x.innerText);
}

function setBox(){
  const boxArr = document.querySelectorAll(".box");

  console.log(boxArr);

  for(let i = 0; i < boxArr.length; i++){
    boxArr[i].style.width = "100px";
    boxArr[i].style.height = "100px";
    boxArr[i].style.backgroundColor = "green";
  }
}

function checkDup(){
  //유저가 입력한 아이디 가져오기 
  const userIdTag = document.querySelector("#userId");
  console.log(userIdTag);
  console.log(userIdTag.placeholder);
  console.log(userIdTag.id);
  console.log(userIdTag.type);
  console.log(userIdTag.value);

  userIdTag.placeholder = "바꿉니다.";
  userIdTag.value = "JS로 넣어주는 value입니다.";
  userIdTag.type = "checkbox";

  //중복인지 확인하기
}