class ExponentialFunction extends MFunction {
    constructor(a) {
        if(!(a > 0)) throw new Error("'a' must be greater than 0!");
        super();
        this.a = a;
    }

    formula(x) {
        return Math.pow(this.a, x);
    }

    isInDomain(x) {
        return true;
    }

    getZero() {
    }

    getDerivative() {
        let a = this.a;
        
        return new MFunction(function(x) {
            return new ExponentialFunction(a).get(x) * new LogarithmicFunction(Math.E).get(a);
        });
    }
    
    getIntegral() {
    }
}