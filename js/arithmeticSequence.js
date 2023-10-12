class ArithmeticSequence extends Sequence {
    constructor(firstMember, difference) {
        super();
        this.a1 = firstMember;
        this.r = difference;
    }
    formula(n) {
        return this.a1 + (n - 1) * this.r;
    }
}