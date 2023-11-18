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

// let a: number = 1
let b: string = 'b'
let c: boolean = true
let d: RegExp = /.*/
let e: Array<void> = []
let f: void[] = []

//cortage - строгое описание элементов в массиве
function useState(iniital: number): [number, (n: number) => void] {
    let value = iniital

    function setValue(newValue: number) {
        value = newValue
    }

    return [value, setValue]
}

let [counter, setCounter] = useState(1)

// type never  — этого поля не должно быть вовсе,

type TA = {
    a: number
    b: number
    c?: never
}

type TC = {
    a?: never
    b: number
    c: number
}

type haha = TA | TC

// let a: haha = {a: 0, b: 1, c: 2}
let a: haha = {a: 0, b: 1}
// let a: haha = {b: 1, c: 2}