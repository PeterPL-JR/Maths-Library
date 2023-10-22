class FibbonacciSequence extends Sequence {
    constructor() {
        super();
    }

    formula(n) {
        if(n == 1 || n == 2) return 1;
        return this.formula(n - 1) + this.formula(n - 2);
    }
}