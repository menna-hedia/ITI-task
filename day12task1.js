class Shape {
    area() {
        throw"Erorr!!!";
    }

    perimeter() {
        throw "Erorr!!!";
    }
}

// Circle class
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    perimeter() {
        return 2 * Math.PI * this.radius;
    }
}

// Square class
class Square extends Shape {
    constructor(width) {
        super();
        this.width = width;
    }

    area() {
        return this.width * this.width;
    }

    perimeter() {
        return 4 * this.width;
    }
}

// Triangle class
class Triangle extends Shape {
    constructor(height, base, length2, length3) {
        super();
        this.height = height;
        this.base = base;
        this.length2 = length2;
        this.length3 = length3;
    }
    area() {
        return 0.5 *this.base * this.height;
    }

    perimeter() {
        return this.base + this.length2 + this.length3;
    }
}

// Rectangle class
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * (this.width + this.height);
    }
}

let Crl = new Circle(40);
console.log("Circle Area=", Crl.area());
console.log("Circle Perimeter=", Crl.perimeter());

let Sqr = new Square(20);
console.log("Square Area=", Sqr.area());
console.log("Square Perimeter=", Sqr.perimeter());

let Trgl = new Triangle(30, 40, 25, 20);
console.log("Triangle Area=", Trgl.area()); 
console.log("Triangle Perimeter=", Trgl.perimeter());

let Rect = new Rectangle(10, 20);
console.log("Rectangle Area=", Rect.area());
console.log("Rectangle Perimeter=", Rect.perimeter());