const x = {
  atk:100,
  def:50,
  isDead:false,
  skill:function(){},
  foods:["사과", "딸기", "망고"]
};
// const x = new Object();

const str = "name";
x["max-level"] = 250;
x[str] = "홍길동";
x.name = "홍길동";
x.age = 20;
x.isProgrammer = true;
x.hobby = ["코딩", "프로그래밍", "개발"];
x.hello = function(){
  console.log("hello~~~!!!");
}

console.log(x);
console.log(x["max-level"]);
console.log(x.name);
console.log(x.age);
console.log(x.isProgrammer);
console.log(x.hobby);

x.hello();

for(const k in x){
  console.log(k);
}