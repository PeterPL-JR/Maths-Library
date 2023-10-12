class RationalFunction extends Function {
    constructor(P, Q) {
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