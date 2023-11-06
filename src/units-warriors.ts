type Warrior = {
    health: number,
    armor: number
}

type ArrowWeapon = {
    arrows: number
    damage: number,
    range: number
}

type SwordWeapon = {
    damage: number,
    range: number
    wear: number
}


type Shield = {
    size: number
    resistance: number
}


type Archer = Warrior & {
    weapon: ArrowWeapon
    shield: null


}

type Swordsman = Warrior & {
    weapon: SwordWeapon
    shield: Shield
}

let result: Array<Archer | Swordsman> = [{
    armor: 1,
    health: 100,
    shield: {size:10,resistance:10},
    weapon: {wear:10,range:1,damage:20}
}]