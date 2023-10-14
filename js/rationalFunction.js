class RationalFunction extends MFunction {
    constructor(P, Q) {
        if(P.constructor.name == "Monomial") P = Polynomial.of([P]);
        if(Q.constructor.name == "Monomial") Q = Polynomial.of([Q]);
        super();
        this.P = P;
        this.Q = Q;
    }

    formula(x) {
        return this.P.get(x) / this.Q.get(x);
    }

    isInDomain(x) {
        return this.Q.get(x) != 0;
    }

    getZero() {
        return this.P.getZero();
    }
}