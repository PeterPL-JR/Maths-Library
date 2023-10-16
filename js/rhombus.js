class Rhombus extends Parallelogram {
    constructor(a, angle) {
        super(a, a, angle);
    }

    a() {
        return super.a() | super.b();
    }
    b() {
    }

    area() {
        return this.a() * this.a() * this.angle.sin();
    }

    height() {
        return this.area() / this.a();
    }
}