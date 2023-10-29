// console.log(1)

function sum(a: number, b: number) {
    return a + b
}

const input = document.querySelector('.user-value')!

if (input instanceof HTMLInputElement) {
    input.value = '100'
}

/*
!= null
typeof some == 'string'
    some instance of entity
    'value' in userValueInput
 */

console.log(sum(3, 3))

let hz: null = null

let a: number = 1
let b: string = 'b'
let c: boolean = true
let d: RegExp = /.*/
let e: Array<void> = []
let f: void[] = []