interface ICat {
    age:number
    voice:string
    lifes:number
}

type CatKey = keyof ICat

let a:CatKey = "voice" //"voice" | "age" | "lifes"

export default a