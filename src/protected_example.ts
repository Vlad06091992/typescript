class Animal {
    // protected доступен из самого класса и его наследников
    protected isUpdate: boolean;

    //можем вызвать в классе либо в наследнике
    protected sayHello(){
        console.log('hello')
};

    constructor() {
        this.isUpdate = false;
    }
}

class Bird extends Animal {
    constructor() {
        super();
        // переопределяем так как имеем доступ
        super.isUpdate = true;
    }

    birdHello(){
        //вызываем в наследнике
        this.sayHello()
    }
}

let animal: Animal = new Animal();
//не можем вызвать извне
// animal.isUpdate = true; // Error

let bird: Bird = new Bird();
// bird.isUpdate = true; // Error
