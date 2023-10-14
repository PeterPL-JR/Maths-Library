class Polynomial extends MFunction {
    constructor(coefficients) {
        super();
        this.elements = [];
        
        let degree = coefficients.length - 1;
        for(let coefficient of coefficients) {
            this.elements.push(new Monomial(coefficient, degree));
            degree--;
        }
    }

    formula(x) {
        let y = 0;
        for(let i = this.degree(); i >= 0; i--) {
            y += this.elements[i].coefficient * Math.pow(x, this.elements[i].degree);
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
        return this.elements.length - 1;
    }

    // TODO
    static sum(p1, p2) {
    }

    // TODO
    static difference(p1, p2) {
    }

    // TODO
    static multiply(p1, p2) {
    }

    // TODO
    static divide(p1, p2) {
    }

    static of(monomials) {
        let elements = Array.from(monomials);
        elements.sort((e1, e2) => e2.degree - e1.degree);
        
        let degree = elements[0].degree;
        let coefficients = [];

        for(let i = degree; i >= 0; i--) {
            let monomial = elements.find((elem) => elem.degree == i);            
            coefficients.push(monomial ? monomial.coefficient : 0);
        }
        return new Polynomial(coefficients);
    }
}