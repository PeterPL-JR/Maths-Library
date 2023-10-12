class Function {
    constructor(formula) {
        if(formula) this.formula = formula;
    }

    get(x) {
        if(!this.isInDomain(x)) return;
        return this.formula(x);
    }

    formula(x) {
    }

    isInDomain(x) {
    }

    getZero() {
    }
}