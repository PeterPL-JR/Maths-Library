class LinearFunction extends PolynomialFunction {
    static DEGREE = 1;
    
    constructor(a, b=0) {
        if(!a) throw new Error("'a' cannot be 0!");
        super([a, b]);

        this.a = a;
        this.b = b;
    }

    getZero() {
        return -this.b / this.a;
    }

    generalForm() {
        let A = this.a;
        let B = -1;
        let C = this.b;
        
        return {A, B, C};
    }
}