class GeometricSequence extends Sequence {
    constructor(firstMember, quotient) {
        super();
        this.a1 = firstMember;
        this.q = quotient;
    }
    formula(n) {
        return this.a1 * Math.pow(this.q, n - 1);
    }
}