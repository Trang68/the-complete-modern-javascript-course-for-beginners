class Shape {
    area(){
        return 0; // method of parent class with no param
    }
}

class Circle extends Shape{
    constructor(radius){
        super(); // put super() always first like flag to call method of parent class
        this.radius = radius;
    }
    area(){
        return Math.PI * this.radius ** 2;
    }
}
class Square extends Shape{
    constructor(side){
        super();
        this.side = side;
    }
    area(){
        return this.side ** 2;
    }
}

let myCircle = new Circle(5);
let mySquare = new Square(10);

console.log('Area of the circle is ', myCircle.area());
console.log(`Area of the square is ${mySquare.area()}`);