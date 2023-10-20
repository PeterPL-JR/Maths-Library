class RationalExpression {
    constructor(P, Q) {
        if(P.constructor.name == "Monomial") P = new Polynomial([P]);
        if(Q.constructor.name == "Monomial") Q = new Polynomial([Q]);
        this.P = P;
        this.Q = Q;
    }

    get(values) {
        let valueP = this.P.get(values);
        let valueQ = this.Q.get(values);

        if(valueQ != 0 && isFinite(valueP) && isFinite(valueQ)) {
            return valueP / valueQ;
        }
    }

    static sum(e1, e2) {
        let P = Polynomial.sum(Polynomial.multiply(e1.P, e2.Q), Polynomial.multiply(e1.Q, e2.P));
        let Q = Polynomial.multiply(e1.Q, e2.Q);

        return new RationalExpression(P, Q);
    }

    static difference(e1, e2) {
        return RationalExpression.sum(e1, RationalExpression.multiply(e2, -1));
    }

    static multiply(e1, e2) {
        if(typeof e2 == "number") e2 = new RationalExpression(new Polynomial([e2]), new Polynomial([1]));
        let P = Polynomial.multiply(e1.P, e2.P);
        let Q = Polynomial.multiply(e1.Q, e2.Q);

        return new RationalExpression(P, Q);
    }

    static divide(e1, e2) {
        return RationalExpression.multiply(e1, new RationalExpression(e2.Q, e2.P));
    }

    // TODO
    static reduce() {
    }

    copy() {
        return new RationalExpression(this.P.copy(), this.Q.copy());
    }
}