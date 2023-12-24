import {ICat} from "./lesson-3/conditional-types";

const n = 'name'

const s = {
    [n]: 'Vlad'
}

console.log(a)

// type Ronly<T> = {
//     [K in keyof T]:T
// }
//
// type rc = Ronly<ICat>
//
// let a:rc = {age:{age:1,voice:,lifes:1},voice:{age:1,voice:,lifes:1},lifes:{age:1,voice:,lifes:1}} //in key of example

// type Ronly<T> = {
//     [K in keyof T]:K
// }
//
// type rc = Ronly<ICat>
//
// let a:rc = {age:'age',voice:'voice',lifes:'lifes'} //in key of example


type Ronly<T> = {
    [K in keyof T]:T[K]
}

type rc = Ronly<ICat>

let a:rc = {age:1,voice:'voice',lifes:3} //in key of example

const b1 = {id:100,title:'p1',price:1000}

type rc1 = Ronly<typeof b1>

let a1:rc1 = {id:30,price: 1,title: "333"}

type Ronly1<T> = {
    [K in keyof T]?:T[K]
}

const a2:Ronly1<typeof b1> = {title: '2'}

type Cat = {
    lifes:number,
    voice:'meow'
}

type rdOnly<T extends object> = {
    readonly [K in keyof T]:T[K]
} // любой тип переданный в этот тип становится таким же типом только с замороженными полями

let fedya:rdOnly<Cat> = {lifes:20,voice:'meow'}

// fedya.lifes = 10 //readonly(невозможно изменить


type WTFUOOER<T extends object> = {
    readonly [K in keyof T as Uppercase<K & string>]:T[K]
} // делает поля с большой буквы

const bigFedya:WTFUOOER<Cat> = {
    VOICE:'meow',
    LIFES:10
}

type WTFUOOER2<T extends object> = {
    -readonly [K in keyof T as Uppercase<K & string>]:T[K]
} //убирает readonly

const bigFedya2:WTFUOOER2<Cat> = {
    VOICE:'meow',
    LIFES:10
}

bigFedya2.LIFES--

type Cat2  = Cat & {
    age?:number
}

type WTFUOOER3<T extends object> = {
    readonly [K in keyof T as Uppercase<K & string>]-?:T[K]
} //делает поля обязаьельными

let fedya3:WTFUOOER3<Cat2> = {
    LIFES:1,
    VOICE:"meow",
    AGE:1
}