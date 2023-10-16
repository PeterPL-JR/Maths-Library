class Trapezium extends Quadrangle {
    constructor(a, b, c, d, angle) {
        super(a, d, b, c);
    
        this.baseA = a;
        this.baseB = b;

        this.sideLeft = c;
        this.sideRight = d;

        this.angle = angle;
    }

    a() {
        return this.baseA;
    }
    b() {
        return this.baseB;
    }
    c() {
        return this.sideLeft;
    }
    d() {
        return this.sideRight;
    }
    
    area() {
        return (this.a() + this.b()) * this.height() / 2;
    }

    height() {
        let A = this.a() - this.b();
        let B = this.c() + this.d();
        let C = this.c() - this.d();

        return Math.sqrt(-(A*A - B*B)*(A*A - C*C)) / (2 * Math.abs(A));
    }
}