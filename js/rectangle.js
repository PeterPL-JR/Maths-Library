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
        return Math.sqrt(this.a()*this.a() + this.b()*this.b());
    }
}