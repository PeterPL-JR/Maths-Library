class Triangle extends Polygon {
    constructor(a, b, c) {
        super([a, b, c]);
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

    area() {
        let a = this.a();
        let b = this.b();
        let c = this.c();

        let cos = LawOfCosines.cos(a, b, c);
        let sin = Math.sqrt(1 - cos*cos);

        return 0.5 * a * b * sin;
    }

    height() {
        let height = function(triangle, side) {
            return (2 * triangle.area()) / triangle[side];
        };
        return {
            a: height(this, "a"),
            b: height(this, "b"),
            c: height(this, "c")
        };
    }
}