class PolynomialFunction extends MFunction {
    constructor(coefficients) {
        super();
        
        let elements = [];
        let degree = coefficients.length - 1;

        for(let coefficient of coefficients) {
            elements.push(new Monomial(coefficient, [new Variable("x", degree)]));
            degree--;
        }
        this.polynomial = new Polynomial(elements);
    }

    formula(x) {
        let y = 0;
        for(let elem of this.polynomial.elements) {
            y += elem.coefficient * Math.pow(x, elem.degree());
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
        return this.polynomial.degree();
    }
}