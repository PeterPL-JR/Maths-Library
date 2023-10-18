class LogarithmicFunction extends MFunction {
    constructor(a) {
        if(!(a > 0 && a != 1)) throw new Error("'a' must be greater than 0 and different from 1!");
        super();
        this.a = a;
    }

    formula(x) {
        return new Log(this.a, x).get();
    }

    isInDomain(x) {
        return x > 0;
    }

    getZero() {
        return 1;
    }
}