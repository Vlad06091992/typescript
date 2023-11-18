"use strict";
// console.log(1)
function sum(a, b) {
    return a + b;
}
const input = document.querySelector('.user-value');
if (input instanceof HTMLInputElement) {
    input.value = '100';
}
/*
!= null
typeof some == 'string'
    some instance of entity
    'value' in userValueInput
 */
console.log(sum(3, 3));
let hz = null;
// let a: number = 1
let b = 'b';
let c = true;
let d = /.*/;
let e = [];
let f = [];
//cortage - строгое описание элементов в массиве
function useState(iniital) {
    let value = iniital;
    function setValue(newValue) {
        value = newValue;
    }
    return [value, setValue];
}
let [counter, setCounter] = useState(1);
// let a: haha = {a: 0, b: 1, c: 2}
let a = { a: 0, b: 1 };
// let a: haha = {b: 1, c: 2}
