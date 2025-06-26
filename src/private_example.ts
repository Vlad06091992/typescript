import {makeLogger} from "ts-loader/dist/logger";

class Figure {
    //приватное свойство
    //1) не можем использовать из вне
    // 2) не можем напрямую использовать в наследниках, но можем использовать через геттеры и сеттеыры в наследниках если они определены в родителе
    // вместе с приватным методом
    //
    constructor(private color: string) {

    }
    getColor() {
        return this.color
    }

    setColor(color:string) {
        this.color = color
    }


    //приватный метод
    //1) не можем использовать из вне
    // 2) не можем напрямую использовать в наследниках, но можем использовать через геттеры и сеттеыры в наследниках если они определены в родителе
    // вместе с приватным методом
    //
    private getColorUppercase() {
        return this.color.toUpperCase()
    }

    public publicGetColorUppercase(){
        return this.getColorUppercase()
    }
}

class Rectangle extends Figure {
    constructor(color: string, private width: number, private height: number) {
        super(color);
        this.width = width
        this.height = height
    }


}

const rect = new Rectangle('красный', 40, 50)

rect.getColor()
console.log(rect.getColor())

//геттеры сеттеры унаследованы и мы можем работать с приватным свойством которое определено в родителе
console.log(rect.setColor("оранжевый"))
console.log(rect.publicGetColorUppercase())

//приватное свойство color доступно
