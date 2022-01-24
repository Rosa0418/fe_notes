/**
 * 箭头函数和一般函数的区别
 * https://segmentfault.com/a/1190000021905571
 */
Function.prototype.myBind = function(context, ...args) {
    return (...innerArgs) => this.call(context, ...args, ...innerArgs);
}

function a (...msg) {
    console.log('name:', this.name)
    console.log(...msg);
}

let b = {name: 'b'}
let c = a.myBind(b, 'sss');
c('ccc');

// Function.prototype.myBind = function(ctx, ...args) {
//     return (...innerArgs) => this.call(ctx, ...args, ...innerArgs);
//   };
  
//   // test
//   const a = {
//     name: "name of a"
//   };
//   function test(...msg) {
//     console.log(this.name);
//     console.log(...msg);
//   }
//   const t = test.myBind(a, "hello");
//   t("world");