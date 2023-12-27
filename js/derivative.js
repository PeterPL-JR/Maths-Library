class Derivative extends MFunction {
    constructor(mfunction) {
        super();
        this.mfunction = mfunction.getDerivative();
    }

    get(x) {
        return this.mfunction.get(x);
    }

    isInDomain(x) {
        return this.mfunction.isInDomain(x);
    }
    
    getZero() {
        return this.mfunction.getZero();
    }
}