//hide 버튼
function f01(){
  //js
  // const x = document.querySelector("#target01");
  // x.style.visibility = "hidden";

  //jquery
  $("#target01").hide(2000);
  // hide(2000) -> 2초에 걸쳐서 사라진다.
}

//show 버튼
function f02(){
  //jquery
  $("#target01").show(2000);
}

//toggle 버튼
function f03(){
  //jquery
  $("#target01").toggle(1000);
}

//fade in 버튼
function f04(){
  $("#target01").fadeIn(1000);
}

//fade out 버튼
function f05(){
  $("#target01").fadeOut(1000);
}

//fadeToggle 버튼
function f06(){
  $("#target01").fadeToggle(1000);
}

//slideDown 버튼
function f07(){
  $("#target01").slideDown(1000);
}

//slideUp 버튼
function f08(){
  $("#target01").slideUp(1000);
}

//slideToggle 버튼
function f09(){
  $("#target01").slideToggle(1000);
}

