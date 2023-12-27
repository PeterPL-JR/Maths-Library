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

    getDerivative() {
        let a = this.a;

        return new MFunction(function(x) {
            return new Log(a, Math.E).get() / x;
        });
    }
    
    getIntegral() {
        let a = this.a;

        return new MFunction(function(x) {
            return (x / new LogN(a).get()) * (new LogN(x).get() - 1);
        });
    }
}