class Quadrangle extends Polygon {
    constructor(a, b, c, d) {
        super([a, b, c, d]);
    }

    a() {
        return this.sides[0];
    }
    b() {
        return this.sides[1];
    }
    c() {
        return this.sides[2];
    }
    d() {
        return this.sides[3];
    }
}