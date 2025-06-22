export class Rectangle {

    public square:number | null = null

    constructor(public height: number, public width: number) {
        this.height = height
        this.width = width
    }

    countSquare(){
        this.square = this.width * this.height
    }

    getSquare(){
        return this.square
    }
}

class Square extends Rectangle {
    constructor(size: number) {
        super(size, size)
    }
}




