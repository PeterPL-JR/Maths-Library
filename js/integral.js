class Integral extends MFunction {
    constructor(mfunction) {
        super();
        this.mfunction = mfunction.getIntegral();
    }
    get(a, b) {
        return this.mfunction.get(b) - this.mfunction.get(a);
    }
}