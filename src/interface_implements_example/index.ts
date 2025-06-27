// Определение интерфейса Figure
namespace some
{

    interface Figure {
        color: string
        getVisibleHeight: () => number
        getVisibleWidth: () => number
    }

// Абстрактный класс Figure2D
    abstract class Figure2D implements Figure {
        constructor(public color: string) {
        }

        abstract getVisibleHeight(): number

        abstract getVisibleWidth(): number

        abstract getVisibleColor(): string
    }

// Конкретный класс Rectangle
    class Rectangle extends Figure2D {
        constructor(color: string, private width: number, private height: number) {
            super(color);
        }

        getVisibleHeight(): number {
            return this.height;
        }

        getVisibleWidth(): number {
            return this.width;
        }

        getVisibleColor(): string {
            return "черный"
        }
    }

// Конкретный класс Circle
    class Circle extends Figure2D {
        constructor(color: string, private radius: number) {
            super(color);
        }

        getVisibleHeight(): number {
            return this.radius * 2; // Диаметр круга
        }

        getVisibleWidth(): number {
            return this.radius * 2; // Диаметр круга
        }

        getVisibleColor(): string {
            return "красный"
        }
    }

// Пример использования
    const rect = new Rectangle("red", 10, 20);
    console.log(`Rectangle: color=${rect.color}, width=${rect.getVisibleWidth()}, height=${rect.getVisibleHeight()}`);

    const circle = new Circle("blue", 5);
    console.log(`Circle: color=${circle.color}, width=${circle.getVisibleWidth()}, height=${circle.getVisibleHeight()}`);

}
