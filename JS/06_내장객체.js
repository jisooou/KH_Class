const x = new Object();
x.name = "홍길동";

const result = x.hasOwnProperty("age");
console.log(result);

console.log(x instanceof Object); 

const date = new Date();
console.log(date);

function showCurrentTime(){
  const divTag = document.querySelector("#div-time");
  divTag.innerText = new Date();

  console.log(new Date());
}

// querySelector 말고 아래와 같이 사용해도 같은 결괏값을 보여준다.
// document.getElementById("div-time")
