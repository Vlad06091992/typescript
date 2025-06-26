abstract class Figure {
    constructor(private color: string) {}

    abstract getSquare(): number;

    getColor() {
        return this.color
    }
}

class Rectangle extends Figure {
    constructor(color: string, private width: number, private height: number) {
        super(color);
    }

    getSquare(){
        return this.width * this.height as number;
    }

}

const rectangle = new Rectangle("черный", 40,50)
console.log(rectangle)
console.log(rectangle.getSquare())
console.log(rectangle.getColor())
