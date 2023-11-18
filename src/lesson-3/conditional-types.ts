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

type SafetyAnimal<T,U>  = T extends {aggressive:boolean } ? U : T

let a1:SafetyAnimal<ICat,IDog> = {

}