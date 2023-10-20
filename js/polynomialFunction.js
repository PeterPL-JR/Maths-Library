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
        return this.polynomial.get({x});
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