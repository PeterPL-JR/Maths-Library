class Sphere extends SolidFigure {
    constructor(radius) {
        this.radius = radius;
    }

    area() {
        return 4 * Math.PI * this.radius * this.radius;
    }

    volume() {
        return (4 / 3) * Math.PI * Math.pow(this.radius, 3);
    }

    diameter() {
        return this.radius * 2;
    }
}