export type Warrior = {
    health: number,
    armor: number
    shield: Shield | null
}

type Weapon = {
    damage: number,
    range: number
}

type ArrowWeapon = Weapon & {
    arrows: number,
    wear?: never

}

type SwordWeapon = Weapon & {
    wear: number
    arrows?: never,

}


type Shield = {
    size: number
    resistance: number
}


type Archer = Warrior & {
    weapon: ArrowWeapon

}

type Swordsman = Warrior & {
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

type Human = {
    name: string,
    clichka?: never
}

let Vlad: Human = {
    name: "Vlad",
}

// type Cat = {
//     name?: never
//     clichka: string
// }
//
// let ff: Human | Cat = {
//     clichka: "fjksl",
//     // name: "fjksl"
// }

// enum ResultCodes {
//     Success = 0,
//     Error = 1,
//     CaptchaIsRequired = 10,
// }
//
// const result: ResultCodes.Error = 1
//
// const resultCode = {
//     Success: 0,
//     Error: 1,
//     CaptchaIsRequired: 10,
// } as const
//
// resultCode.Success = 3
//
// const result2 = ResultCodes.Success

