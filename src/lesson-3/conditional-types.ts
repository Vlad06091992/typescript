
type SafetyAnimalLight<T,U>  = T extends {aggressive:boolean } ? U : T
type TestSafetyAnimalLight  = SafetyAnimalLight<ITiger, ICat>

const cat:TestSafetyAnimalLight = {age:10,lifes:1,voice:'meow'} //cat

export interface ICat {
    age:number
    voice:string
    lifes:number
}

interface IDog {
    age:number
    voice:string
    aggressive:boolean
}

interface ITiger extends ICat {
    aggressive:boolean
}

type SafetyAnimal<T,D,U>  = T extends {aggressive:boolean } ?  D extends {aggressive:boolean} ? U extends{aggressive:boolean}? never : D : T: U

// type A1 = SafetyAnimal<ICat,IDog>
// type A2 = SafetyAnimal<ITiger,IDog>
type A3 = SafetyAnimal<IDog,ICat,IDog>
// type A4 = SafetyAnimal<ICat,IDog>

// let a3:A3 = {}
// let a1:A1 = {}
// let a2:A2 = {}
// let a4:A4 = {} as ICat

export let q = 3

export let x = q === 1 ? q >1 ? 2 : 1 :5
console.log(x)

