class Polynomial extends MFunction {
    constructor(... coefficients) {
        super();
        this.coefficients = coefficients;
    }

    formula(x) {
        let y = 0;
        for(let i = this.degree(); i >= 0; i--) {
            y += this.coefficients[i] * Math.pow(x, i);
        }
        return y;
    }

    isInDomain(x) {
        return true;
    }

    // TODO
    getZero() {
    }

    degree() {
        if(this.coefficients.length > 0) {
            return this.coefficients.length - 1;
        }
    }
}