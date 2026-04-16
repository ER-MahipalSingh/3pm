// function test() {
//   console.log("hello");
// }
// test()

// function test1(a){
//     console.log(a);
// }
// test1(10)

// function sum(a, b){
//     return a + b;
// }
// const res = sum(10,20)
// console.log(res);
// console.log(sum(100,200));

// function test2(){
//     return 10;
// }
// const res = test2()
// console.log(res);
// console.log(test2());

// function fact(n){
//     if(n===1) return 1;
//     return n * fact(n-1);
// }
// const res = fact(5);
// console.log(res);

// const greet = function () {
//   console.log("Hello Students");
// };
// greet();

// const res = () => {
//   console.log("Hello");
// };
// res();

// (function () {
//   console.log(10);
// })();

// var a = 10;
// let b = 20;
// const c = 30;

function outer() {
  var a = 10;
  let b = 20;
  const c = 30;

  //   console.log("Outer: ", a);
  //   console.log("Outer: ", b);
  //   console.log("Outer: ", c);

  function inner() {
    var d = 100;
    console.log("Inner: ", a);
    console.log("Inner: ", b);
    console.log("Inner: ", c);
  }
  console.log(d);

  inner();
}
outer();
