const menubtn = document.querySelector("#menu-btn");
menubtn.addEventListener("click", function(){
  const side = document.querySelector("#side");
  
  // toggle : 두가지 선택값을 왔다갔다 하는 것. 
  // toggle : add랑 remove를 번갈아가면서 한다. 
  side.classList.toggle("active");

});
