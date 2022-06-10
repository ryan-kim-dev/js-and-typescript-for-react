// * 1. 매개변수의 타입 지정하기
// 명시한 타입과 일치하지 않는 인수로 함수를 호출하면 아래의 에러 메세지 발생.
// Argument of type 'string' is not assignable to parameter of type 'number'.
function multiply(num1: number, num2: number) {
  console.log(num1 * num2);
}
multiply(2, 3);
// multiply('1', 2);

// * 1-1. 매개변수로 객체(요소가 숫자인 배열) 받기
function showItems(arr: number[]) {
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
