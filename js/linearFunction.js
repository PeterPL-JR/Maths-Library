class LinearFunction extends PolynomialFunction {
    constructor(a, b=0) {
        if(!a) throw new Error("'a' cannot be 0!");
        super([a, b]);

        this.a = a;
        this.b = b;
    }

    getZero() {
        return -this.b / this.a;
    }
}