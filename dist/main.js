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
let a = 1;
let b = 'b';
let c = true;
let d = /.*/;
let e = [];
let f = [];
