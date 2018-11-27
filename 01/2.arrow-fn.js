// arrow fn 不具备this arguments
//自己家没有this 就找上一级的this

//如何更改this指向
// 1） call apply bind
// 2） var that = this
// 3) 箭头函数

// function a(b){
//     return b + 1
// }
//去掉function关键字，参数有一个可以省略小括号，小括号和大括号之间有一个箭头，如果没有大括号，直接就是return的值
//如果有大括号 必须写return返回值
//let a = b => b+1

//
// function a(b){
//     return function(c){
//         return b+c;
//     }
// }
let a = b => c => b+c;
console.log(a(1)(2));//3