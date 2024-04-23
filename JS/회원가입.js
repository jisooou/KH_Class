// 패스워드 부분 

//패스워드 (active 추가)
const pwdTag = document.querySelector("input[type=password]");
//function(){} - 익명함수로 만들어 주었다.
pwdTag.addEventListener("click", function(){
  const pwdText = document.querySelector("#pwdText");
  pwdText.classList.add("active");
} );
//패스워드 (active 제거)
pwdTag.addEventListener("blur", function(){
  const pwdText = document.querySelector("#pwdText");
  pwdText.classList.remove("active");
});
//패스워드 (mouse '오버' 했을 때)
pwdTag.addEventListener("mouseover", function(){
  const pwdText = document.querySelector("#pwdText");
  pwdText.classList.add("active");
});
//패스워드 (mouse '오버' 안했을 때)
pwdTag.addEventListener("mouseout", function(){
  const pwdText = document.querySelector("#pwdText");
  pwdText.classList.remove("active");
});

// --------------------------------------------------------------

//패스워드 확인 부분

//패스워드 확인 (active 추가)
const pwdCheckTag = document.querySelector("input[name=pwdCheck]");
pwdCheckTag.addEventListener("focus", function(){
  const pwdCheckText = document.querySelector("#pwdCheckText");
  pwdCheckText.classList.add("active");
} );
//패스워드 확인 (active 제거)
pwdCheckTag.addEventListener("blur", function(){
  const pwdCheckText = document.querySelector("#pwdCheckText");
  pwdCheckText.classList.remove("active");
} );
//패스워드 확인 (mouse '오버' 했을 때)
pwdCheckTag.addEventListener("mouseover", function(){
  const pwdCheckText = document.querySelector("#pwdCheckText");
  pwdCheckText.classList.add("active");
} );
//패스워드 확인 (mouse '오버' 안했을 때)
pwdCheckTag.addEventListener("mouseout", function(){
  const pwdCheckText = document.querySelector("#pwdCheckText");
  pwdCheckText.classList.remove("active");
} );


