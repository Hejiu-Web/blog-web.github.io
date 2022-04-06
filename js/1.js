// var x = 10;
// var y = x;

// console.log(y);

// // 一元操作符
// // 清空控制台内容
// console.clear();

//  var str = +"3"
// console.log(str, typeof str);

// console.log(--str);
// console.log(++str);
// console.log(str--);
// console.log(str++);

// // 运算操作符
// console.clear();

// console.log("7 % 2 =", 7 % 2);

// console.log("7 ** 2=", 7 ** 2)

// // 比较操作符
// console.clear();
// console.log("1>5", 1 > 5);
// console.log(1 >= 5);
// console.log(undefined == null);
// console.log(undefined === null);

// // 逻辑操作符
// // flase, 0, "" , null, undefined(都是假值)
// console.clear();
// console.log(true && true);
// console.log(false && false);
// console.log(true || false);

// console.log(!true);

// console.log('true &&"hello"', true && "hello");

// // 位运算符
// console.clear();
// console.log(5 & 3);

// console.log(5 | 3);

// console.log(5 ^ 3);

// console.log(~3);

// console.log(5 << 1);

// console.log(-5 >>> 1);

// // 三目运算符
// console.clear();

// var num = 10;
// console.log(num > 15 ? "chumen" : "zaijia");

// // 流程控制语句
// console.clear();

// {
//     var name = "鹤酒";
//     console.log(name);

//     let age = 15;
//     console.log(age);

//     const year = 18;
//     console.log(year);
// }

// console.log(name);

// //  if 判断语句
// console.clear();

// var pass = prompt('亲输入密码！');

// if (pass === '123456') {
//     alert('登陆成功');
// } else {
//     alert('登录失败');
// }

// // if else if else语句
// console.clear();
// var pass = prompt('亲输入用户权限');

// if (pass === '1') {
//     alert('root');
// }else if (pass === '2') {
//     alert('pass');
// }else {
//     alert('qita');
// }

// // switch case 语句
// var pass = prompt("亲输入密码");

// switch (pass) {
//     case '1':
//         alert('进入成功');
//         break;
//     case '2':
//         alert('进入成功');
//         break;
//     case '3':
//         alert('进入成功');
//         break;
//     default:
//         alert('输入错误');
// }

// // while 循环语句
// var pass = '';
// while (pass !== '1234') {
//     pass = prompt('亲输入密码');
// }

// console.log('登陆成功');

// // do while 循环语句
// var x = 5;
// do {
//     console.log(x++);
// } while (x > 5 && x <= 10);
// console.log(x);

// // for 循环语句
// for (let i = 0; i < 10; i = i + 2) {
//     console.log(i);
// }

// // 以下是死循环
// // for (;;) {
// //     console.log('true');
// // }

// var j = 0;
// while (j < 10) {
//     console.log(j);
//     j++;
// }

// // break 和 continue 终止语句
// for (let i = 0; i < 10; i ++) {
//     if (i === 6) {
//         // break; // 强制终止语句
//         continue;
//     }
//     console.log(i);
// }

// 函数语句
function mkk() {
    console.log('打开冰箱门');
    console.log('把大象放进去');
    console.log('关上冰箱门');
}

function mkkk(aabb) {
    console.log('打开冰箱门');
    console.log("把" + aabb + "放进去");
    console.log('关上冰箱门');
}

function add(a, b) {
    return a + b;
}

function testnum(num) {
    if (num < 0) return;
    return num > 10;
}

// 函数的调用
// mkk();
mkkk("猫");
add(1, 2);
console.log(add(1, 2));

var num = add(1, 2);
console.log(num);

console.log(num, 5);

console.log(testnum(-5));
console.log(testnum(15));