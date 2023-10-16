class Cylinder extends SolidFigure {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;

        this.base = new Circle(radius);
    }

    area() {
        return 2 * this.baseArea() + this.sideArea();
    }

    volume() {
        return Math.PI * this.radius * this.radius * this.height;
    }

    baseArea() {
        return this.base.area();
    }
    sideArea() {
        return 2 * Math.PI * this.radius * this.height;
    }
}