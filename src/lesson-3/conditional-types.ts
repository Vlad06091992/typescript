interface ICat {
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

// type SafetyAnimal

type SafetyAnimalLight<T,U>  = T extends {aggressive:boolean } ? U : T
type TestSafetyAnimalLight  = SafetyAnimalLight<ITiger, ICat>

const cat:TestSafetyAnimalLight = {age:10,lifes:1,voice:'meow'} //cat


type SafetyAnimal<T,U>  = T extends {aggressive:boolean } ? U extends {aggressive:boolean } ?  never : U : T

type A1 = SafetyAnimal<ICat,IDog>
type A2 = SafetyAnimal<IDog,ICat>
type A3 = SafetyAnimal<ITiger,IDog>

let a3:A3 = {} as never
let a1:A1 = {} as ICat
let a2:A2 = {} as ICat