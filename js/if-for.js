'use strict'

// let i = 1;
// if (i === 1) {
//     console.log("真です");
// }

// let i = 2;
// if (i === 1) {
//     console.log("真です");
// }

//let testScore = 80;

function scoreCheck() {
    let testScore = document.getElementById('score').value;
    if (testScore >= 80) {
        document.write("合格です!　おめでとうございます！");
     } else if (testScore >= 70) {
        document.write("惜しい！　あと少し！");
     } else {
        document.write("不合格です！　もう少し勉強しましょう");
     }
}

//  if (testScore >= 80) {
//     document.write("合格です!　おめでとうございます！");
//  } else if (testScore >= 70) {
//     document.write("惜しい！　あと少し！");
//  } else {
//     document.write("不合格です！　もう少し勉強しましょう");
//  }

// const nameList = [ "田中","山田","林","佐藤"];

// for (let i = 0; i < nameList.length; i++) {
//     console.log(nameList[i])
// }
// console.log(nameList[0]);
// console.log(nameList[1]);
// console.log(nameList[2]);

// 下記のループ文をこのように表示しなさい
// 1．田中
// 2．山田
// 3．林
// 4．佐藤
// ヒント　iの値を利用する

// const nameList = [ "田中","山田","林","佐藤"];

// for (let i = 0; i < nameList.length; i++) {
//     console.log(`${i+1}.${nameList[i]}`);
// }

//continue文
// for (let i = 0; i < 10; i++) {
//     if (i % 2 === 0) continue;
//     console.log(i);
// }
// //break文
// for (let i = 1; i < 1000; i++) {
//     if (i >10) break;
//     console.log(i);
// }