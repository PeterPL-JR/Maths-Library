class Circle extends PlaneFigure {
    constructor(radius) {
        this.radius = radius;
    }

    perimeter() {
        return 2 * Math.PI * this.radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }

    diameter() {
        return this.radius * 2;
    }
}