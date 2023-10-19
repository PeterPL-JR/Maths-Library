class QuadraticFunction extends PolynomialFunction {
    constructor(a, b=0, c=0) {
        if(!a) throw new Error("'a' cannot be 0!");
        super([a, b, c]);

        this.a = a;
        this.b = b;
        this.c = c;
    }

    getVertex() {
        let p = -this.b / (2 * this.a);
        let q = -this.getDelta() / (4 * this.a);
        return {p, q};
    }

    getDelta() {
        return Math.pow(this.b, 2) - 4 * this.a * this.c;
    }

    getZero() {
        if(this.getDelta() > 0) {
            let x1 = (-this.b - Math.sqrt(this.getDelta())) / (2 * this.a);
            let x2 = (-this.b + Math.sqrt(this.getDelta())) / (2 * this.a);
            return [x1, x2];
        } 
        else if(this.getDelta() == 0) {
            return this.getVertex().p;
        }
    }

    canonicalForm() {
        let a = this.a;
        let p = this.getVertex().p;
        let q = this.getVertex().q;
        return {a, p, q};
    }
}