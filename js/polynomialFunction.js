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

    getZero() {
        if(this.degree() == 1) return new LinearFunction(...this.polynomial.coefficients()).getZero();
        if(this.degree() == 2) return new QuadraticFunction(...this.polynomial.coefficients()).getZero();

        let polynomial = this.polynomial.copy();
        let zero = [];
        let options = [];

        let lastDegree = polynomial.elements[polynomial.elements.length - 1].degree();
        if(lastDegree != 0) {
            zero.push(0);
            polynomial = Polynomial.divide(polynomial, new Polynomial([new Monomial(1, [new Variable("x", lastDegree)])]));
        }

        let cFirst = Math.abs(polynomial.elements[0].coefficient);
        let cLast = Math.abs(polynomial.elements[polynomial.elements.length - 1].coefficient);

        for(let i = 1; i <= cFirst; i++) {
            if(cFirst % i != 0) continue;
            for(let j = 1; j <= cLast; j++) {
                if(cLast % j != 0) continue;

                let n = j / i;
                if(options.indexOf(n) == -1) options.push(n, -n);
            }
        }
        
        for(let p of options) {
            let result = Polynomial.divide(polynomial, new LinearFunction(1, -p).polynomial);
            if(result) {
                polynomial = result;
                zero.push(p);
            }
        }
        return zero.sort();
    }

    degree() {
        return this.polynomial.degree();
    }

    static get(coefficients) {
        if(coefficients.length == 2) return new LinearFunction(...coefficients);
        if(coefficients.length == 3) return new QuadraticFunction(...coefficients);

        return new PolynomialFunction(coefficients);
    }

    getDerivative() {
        let elements = [];
        for(let elem of this.polynomial.elements) {
            let n = elem.coefficient * elem.degree();
            let degree = elem.degree() - 1;
            elements.push(new Monomial(n, [new Variable("x", degree)]));
        }
        return PolynomialFunction.get(new Polynomial(elements).coefficients());
    }

    getIntegral() {
        let elements = [];
        for(let elem of this.polynomial.elements) {
            let degree = elem.degree() + 1;
            let n = elem.coefficient / degree;
            elements.push(new Monomial(n, [new Variable("x", degree)]));
        }
        return PolynomialFunction.get(new Polynomial(elements).coefficients());
    }
}