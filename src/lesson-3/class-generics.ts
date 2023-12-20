class IdStorage<T extends {id:number}> { //extends generic(required fields)
    items: Array<T> = []

    add(item: T):void {
        this.items.push(item)
    }

    remove(id: number):void {
        this.items = this.items.filter(el => el.id != id)
    }
}

type TProduct = {
    id: number
    title: string
    price: number
}

type TMessage = {
    id: number
    userId: number
    text: string
    dt: Date
}

let productsStorage = new IdStorage<TProduct>()
let messagesStorage = new IdStorage<TMessage>()

let p1:TProduct = {id: 1, title: 'p1', price: 1000}
let p2:TProduct = {id: 2, title: 'p2', price: 2000}
let p3:TProduct = {id: 3, title: 'p3', price: 3000}

let m1 = {id: 11, userId: 1, text: 'hi i am 1', dt: new Date()}
let m2:TMessage = {id: 12, userId: 2, text: 'hi i am 2', dt: new Date()}
let m3:TMessage = {id: 13, userId: 3, text: 'hi i am 3', dt: new Date()}

productsStorage.add(p1)
productsStorage.remove(100  )
messagesStorage.add(m1)

// messagesStorage.add(p1)