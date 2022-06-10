"use strict";
// * 1. 매개변수의 타입 지정하기
// 명시한 타입과 일치하지 않는 인수로 함수를 호출하면 아래의 에러 메세지 발생.
// Argument of type 'string' is not assignable to parameter of type 'number'.
function multiply(num1, num2) {
    console.log(num1 * num2);
}
multiply(2, 3);
// multiply('1', 2);
// * 1-1. 매개변수로 객체(요소가 숫자인 배열) 받기
function showItems(arr) {
    arr.forEach(e => console.log(e));
}
showItems([1, 2, 3, 4]);
/** 자바스크립트 방식: 매개변수의 타입을 지정할 수 없음.
 *
 * function multiply(num1, num2) {
    console.log(num1 * num2);
}
multiply(2, 3);

function showItems(arr) {
  arr.forEach(e => console.log(e));
}
showItems([1, 2, 3, 4]);
 *
 */
// * 2. 기본 타입들
// 변수 선언시 지정한 타입에 맞지 않는 값으로 재할당 불가.
let user = 'Ryan';
user = 'Kim';
// user = 10;
// Type 'number' is not assignable to type 'string'.
// * 타입 추론
// 선언시 타입을 명시하지 않아도 최초에 할당한 타입만 재할당 가능.
let num = 1;
// num = 'Ryan';
// Type 'string' is not assignable to type 'number'.
// * 기본 타입들
let age = 30;
let isMale = true;
let numArr = [1, 2, 3];
let strArr = ['a', 'b', 'c'];
// 배열과 배열의 요소 타입을 지정하는 2가지 방법.
let nums = [1, 2, 3];
let nums2 = [1, 2, 3];
// 지정한 배열 요소의 타입이 아닌 요소로 배열 수정 불가.
// nums.push('문자');
// Argument of type 'string' is not assignable to parameter of type 'number'.
// * 튜플 : 타입과 길이가 고정된 배열.
// 다른 타입도 하나의 배열에 담을 수 있다.
// 지정한 타입의 순서와 개수에 맞게 할당해야 한다.
// push 메서드 사용시 주의.
let complexArr;
complexArr = ['str', 1];
// complexArr = [1, 'str']; // 타입의 순서가 맞지 않음.
complexArr[0].toLowerCase();
// complexArr[1].toLowerCase(); // 타입과 메서드 불일치.
// 주의: push 메서드 사용시 최초 지정한 배열의 길이를 무시함.
complexArr.push(1);
console.log(complexArr); // [ 'str', 1, 1 ]
// * void, never 타입
// void: 반환값이 없는 함수에 사용 가능.
function noReturn() {
    console.log('abcd');
}
// never: 무한 루프의 반복문, 또는 항상 에러를 반환하는 함수에 사용 가능.
function loopForever() {
    while (true) {
        // 무한반복
    }
}
function err() {
    throw new Error('에러 메세지');
}
// * enum 타입
var Brands;
(function (Brands) {
    Brands[Brands["Hyundai"] = 5] = "Hyundai";
    Brands[Brands["Kia"] = 10] = "Kia";
    Brands[Brands["GM"] = 11] = "GM";
})(Brands || (Brands = {}));
console.log(Brands[10]); // 'Kia'
console.log(Brands['Kia']); // 10
/**
 * 자바스크립트 방식
var Brands;
(function (Brands) {
    Brands[Brands["Hyundai"] = 5] = "Hyundai";
    Brands[Brands["Kia"] = 10] = "Kia";
    Brands[Brands["GM"] = 11] = "GM";
})(Brands || (Brands = {}));
 */
// * null, undefined
let a = null;
let b = undefined;
