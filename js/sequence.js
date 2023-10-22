class Sequence extends MFunction {
    constructor(formula) {
        super(formula);
    }

    formula(n) {
    }

    sum(n) {
        return new Sum(this, 1, n).get();
    }

    isInDomain(n) {
        return n >= 1 && n - parseInt(n) == 0;
    }
}