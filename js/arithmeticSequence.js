class ArithmeticSequence extends Sequence {
    constructor(firstMember, difference) {
        super();
        this.a1 = firstMember;
        this.r = difference;
    }

    sum(n) {
        return ((this.a1 + this.get(n)) * n) / 2;
    }

    formula(n) {
        return this.a1 + (n - 1) * this.r;
    }
}