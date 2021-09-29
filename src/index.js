/**
 * const,let等の変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書きが可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// // const変数は上書き不可能
// // val3 = "const変数を上書き";

// const val3 = "const変数を再宣言";

// // constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "yuki",
//   age: 23
// };

// val4.name = "miho";
// console.log(val4);
// val4.adress = "hokkaido";

// constで定義した配列の中身も変更可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("yuki");
// console.log(val5);

// Reactの変数宣言ではほとんどconstを使っていく

/**
 * テンプレート文字列
 */
// const name = "yuki";
// const age = 28;

// // テンプレート文字列を用いた方法
// const message = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message);

/**
 * アロー関数
 */

// 従来の関数
// function func1(str) {
//   return str;
// }
// 変数に関数を詰めることができる
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func１です"));

// アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// 引数が１つしかないときは()を省略できる
// sandboxでは保存すると保管されるので()が追加される
// const func2 = str => {
//   return str;
// };
// console.log(func2("func2です"));

// 処理が１行のときはreturnを省略できる
// ｛｝で囲った場合は必ずreturnをつけないと返されないので注意
// const func2 = str => str;
// console.log(func2("returnは省略できる"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(2, 3));

/*
分割代入
*/
const myProfile = {
  name: "yuki",
  age: 28
};

const message1 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
console.log(message1);

// 上記コードは冗長なコード
// 分割代入を用いることでよりスリムにコードを記述することができる
// const{取り出したいプロパティ} = 取り出し先のオブジェクトと記述する
const { name, age } = myProfile;
const message2 = `私の名前は${name}です。年齢は${age}です`;
console.log(message2);
