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

    getDerivative() {
        let Pd = new Derivative(this.P).mfunction.polynomial;
        let Qd = new Derivative(this.Q).mfunction.polynomial;

        let P = this.P.polynomial;
        let Q = this.Q.polynomial;

        let f1 = Polynomial.difference(Polynomial.multiply(Pd, Q), Polynomial.multiply(P, Qd));
        let f2 = Polynomial.multiply(Q, Q);

        return new RationalFunction(f1.coefficients(), f2.coefficients());
    }
    
    getIntegral() {
    }
}