// 고전 이벤트 모델 (이 친구는 단점이 많음)
// 여러가지 작업이 동시에 실행될 수 X
const btn01 = document.querySelector("#btn01");
btn01.onclick = f01;

function f01(){
  console.log("f01 called ...");
}




// 표준 이벤트 모델 (이걸로 쓸거임)
const btn02 = document.querySelector("#btn02");
btn02.addEventListener('click' , f02);

function f02(){
  console.log("f02 called ...");
}


// 이벤트가 발생한 요소에 접근하기 
const btn03 = document.querySelector("#btn03");
btn03.addEventListener("click", f03);

function f03(x){
  console.log(x.target);
}

// 기본 이벤트 제거
const aTagToNaver = document.querySelector("#naver");
aTagToNaver.addEventListener("click", f04);

function f04(evt){
  evt.preventDefault();
}

//이벤트 전파
const outer = document.querySelector("#outer");
outer.addEventListener("click" , f05);

function f05(){
  console.log("f05 called ...");
}

document.querySelector("#div01").addEventListener("click" , function(){console.log("div01 click !!!");});
document.querySelector("#div02").addEventListener("click" , function(){console.log("div02 click !!!");});
document.querySelector("#div03").addEventListener("click" , function(){console.log("div03 click !!!");});

