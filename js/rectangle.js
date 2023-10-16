class Rectangle extends Parallelogram {
    constructor(a, b) {
        super(a, b, new Angle(90));
    }

    a() {
        return super.a();
    }
    b() {
        return super.b();
    }

    area() {
        return this.a() * this.b();
    }

    diagonal() {
        return PythagorasTheorem.c(this.a(), this.b());
    }
}