/*
    created by: Lê Hoàng Thạch
    created date: 26/08/2024
    description: js cơ bản
*/
/*
lesson 1: Syntax javascript basic
*/
// var fullName = 'Le Hoang Thach';
// var age = 26;
// alert('My name is ' + fullName + ' and I am ' + age + ' years old');
/*
Lesson 2: Một số hàm built-in trong JavaScript
    1. alert
    2. prompt   
    3. confirm
    4. setTimeout
    5. setInterval
    6. console
*/
//console.log in ra dòng chữ bên console trong trình duyệt
// console.log(fullName);
//console.warn in ra dự báo chữ bên console trong trình duyệt
// console.warn(fullName);
//console.error in ra dự báo chữ bên console trong trình duyệt
// console.error(fullName);
// hàm confirm
// confirm('xác nhận bạn trên 18+');
// hàm prompt
// prompt('nhập tên');
// hàm setTimeout cho function chạy sau 1 khoảng thời gian
// setTimeout(function(){
//     alert('hello');
// }, 2000);
// hàm setInterval cho function chạy sau 1 khoảng thời gian nhưng thực thi không ngừng
// setInterval(function(){
//     alert('hello');
// }, 2000);
/*
lesson 3: Toán tử trong JavaScript
*/
// var a = 1 + 2;
// console.log(a);
// toán tử gán
// var b = 10;
// toán tử so sánh
// var c = a == b;
// console.log(c);
// toán tử so sánh
// var d = a === b;
// console.log(d);
// toán tử so sánh
// var e = a != b;
// console.log(e);
// toán tử so sánh
// var f = a !== b;
// console.log(f);
// toán tử nhiều
// if(a > b){
//     console.log('a lon hon b');
// } else {
//     console.log('a nho hon b');
// }
/*
lesson 4: Tiền tố và hậu tố trong JavaScript
*/
// Prefix và Postfix
// Prefix tiền tố dấu ở trước toán hạn
// Postfix hậu tố dấu ở sau toán hạn
// var a = 6;
// Prefix
// console.log(++a);
// việc 1: + 1 cho a, a = a + 1 => a = 7
// việc 2: trả về a + 1;
// Postfix
// var output = a++;
// console.log(output);
// việc 1: a coppy , a coppy = 6 
// việc 2: cộng  a + 1 => a = 7
// việc 3: trả về biến a coppy
// bài toán mô tả để hiểu rõ hơn
// var number = 6;
// var output = number++ + --number;
// console.log(output);
// kết quả bằng 12
// việc 1 : number đầu nó bằng 6 
// việc 2 : number 2 sau khi number đầu cộng lên 7 xong thì number 2 mới trừ 1 là 6
// => 12 = 6 + 6
/*
lesson 5: Câu lệnh điều kiện If
*/
/*
* 0
* false
* ''
* null
* undefined
* NaN
*/
// const bien = 'le hoang thach'
// if (bien) {
//     console.log('dieu kien dung');
// }else {
//     console.log('dieu kien sai');
// }
/*
lesson 6: Kiểu dữ liệu trong JavaScript
1. Kiểu dữ liệu nguyên thủy -primitive data type
-number
-string
-boolean
-symbol
-undefined
-null
2. Kiểu dữ liệu tham chiếu -reference data type
-array
-object
-function
*/
// var myFunction = function(obj){
//     console.log('hello');
//     console.log('Name:', obj.name);
//     console.log('Age:', obj.age);
// }
// // object
// var myObject = {
//     name: 'le hoang thach',
//     age: 18
// }
// myFunction(myObject);
// //array
// var myArray = ['a', 'b', 'c'];
// console.log(myArray);
/*
    Đố vui: để ôn kiến thức học
*/
// var results =  'a' && 'b' && 'c';
// kết quả là gì tại sao
// console.log(results);
// var results =  'a' || 'b' || 'c';
// kết quả là gì tại sao
// console.log(results);
/*
lesson 7: Làm việc với mảng trong JavaScript
*/
var myArray = ['a', 'b', 'c'];
console.log(myArray.join(';'));
//pop xóa phần tử cuối mảng trả và trả về phần tử đã xóa
myArray.pop();
console.log(myArray);
//push thêm phần tử vào cuối mảng
myArray.push('c');
console.log(myArray);





