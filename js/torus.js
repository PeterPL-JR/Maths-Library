class Torus extends SolidFigure {
    constructor(radius, circleRadius) {
        this.radius = radius;
        this.circle = new Circle(circleRadius);
    }

    area() {
        return 4 * Math.pow(Math.PI, 2) * this.circle.radius * this.radius;
    }

    volume() {
        return 2 * Math.pow(Math.PI, 2) * this.radius * Math.pow(this.circle.radius, 2);
    }
}