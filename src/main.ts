import {ICat} from "./lesson-3/conditional-types";

const n = 'name'

const s = {
    [n]: 'Vlad'
}

console.log(a)

type Ronly<T> = {
    [K in keyof T]:1
}

type rc = Ronly<ICat>

let a:rc = {age:1,voice:1,lifes:1} //in key of example

