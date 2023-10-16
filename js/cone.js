class Cone extends SolidFigure {
    constructor(baseRadius, height) {
        this.height = height;

        this.base = new Circle(baseRadius);
    }

    area() {
        return this.baseArea() + this.sideArea();
    }

    volume() {
        return (1 / 3) * this.baseArea() * this.height;
    }

    baseArea() {
        return this.base.area();
    }
    sideArea() {
        return Math.PI * this.base.radius * PythagorasTheorem.c(this.height, this.base.radius);
    }
}