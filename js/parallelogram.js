class Parallelogram extends Trapezium {
    constructor(a, b, angle) {
        super(a, a, b, b, angle);
    }

    a() {
        return this.baseA | this.baseB;
    }
    b() {
        return this.sideLeft | this.sideRight;
    }
    c() {
    }
    d() {
    }

    area() {
        return this.a() * this.b() * this.angle.sin();
    }

    height() {
        return {
            a: this.area() / this.a(),
            b: this.area() / this.b()
        }
    }
}