class Sequence extends Function {
    constructor(formula) {
        super(formula);
    }

    formula(n) {
    }

    sum(n) {
        let sum = 0;
        for(let i = 1; i <= n; i++) {
            sum += this.get(n);
        }
        return sum;
    }

    isInDomain(n) {
        return n >= 1 && n - parseInt(n) == 0;
    }
}