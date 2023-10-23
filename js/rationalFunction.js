class RationalFunction extends MFunction {
    constructor(coefficientsP, coefficientsQ) {
        super();
        this.P = new PolynomialFunction(coefficientsP);
        this.Q = new PolynomialFunction(coefficientsQ);
    }

    formula(x) {
        return new RationalExpression(this.P.polynomial, this.Q.polynomial).get({x});
    }

    isInDomain(x) {
        return this.Q.get(x) != 0;
    }

    getZero() {
        let zeroP = this.P.getZero();
        let zeroQ = this.Q.getZero();

        return zeroP.filter((z) => !zeroQ.includes(z));
    }
}