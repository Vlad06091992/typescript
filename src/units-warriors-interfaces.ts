// type A = {
//     a: number
//     b: number
//     с?: never
// }
//
// type B = {
//     b: number
//     c: number
//     a?: never
// }
//

// interface C {
//     a: number
//     b: number
// }
//
// interface C {
//     g: number
// }


// interface C1 {
//     a: number
// }
// interface C2 {
//     b: number
// }
//
// interface CD extends C1,C2{
//     g: number
// }
//
//
//
// const hz2:CD = {g:1,b:1,a:2}
// // const hz2:C = {g:1,b:1,a:2}
//
// interface D {
//     b: number
//     c: number
//     a?: never
// }
//
// type AB = A | B
//
// let box: AB[] = []
// box.push({a: 1, b: 2})
// box.push({b: 2, c: 3})
//
//
// let Ibox: Array<CD | D> = []
// Ibox.push({g: 4, b: 2, a: 3} as CD )
// Ibox.push({b: 2, c: 3})
//
// interface Cat {
//     age:number
//     lifes:number
//     voice:string
// }
// interface Dog {
//     age:number
//     agressive:boolean
//     voice:string
// }
// interface Kotopes extends Cat,Dog{}
//
// let animal:Kotopes = {age:1,agressive:false,lifes:1,voice:"meow"}

interface Warrior  {
    health: number,
    armor: number
    shield: Shield | null
}

interface Weapon  {
    damage: number,
    range: number
}

interface ArrowWeapon extends Weapon  {
    arrows: number,
    wear?: never

}

interface SwordWeapon extends Weapon  {
    wear: number
    arrows?: never,

}


interface Shield  {
    size: number
    resistance: number
}


interface Archer extends Warrior  {
    weapon: ArrowWeapon
    shield:null

}

interface Swordsman extends Warrior  {
    weapon: SwordWeapon
    shield: Shield
}

let result3: Array<Archer | Swordsman> = [
    {
        armor: 1,
        health: 100,
        shield: {size: 10, resistance: 10},
        weapon: {wear: 10, range: 1, damage: 20}
    },
    {
        armor: 1,
        health: 100,
        shield: null,
        weapon: {arrows: 10, range: 1, damage: 20}
    }]


