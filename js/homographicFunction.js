class HomographicFunction extends RationalFunction {
    constructor(a=0, b=0, c=0, d=0) {
        if(!(c != 0 && a * d - b * c != 0)) throw new Error("Function cannot be constant!");
        super(new LinearFunction(a, b), new LinearFunction(c, d));

        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }

    canonicalForm() {
        let A = (this.b * this.c - this.a * this.d) / Math.pow(this.c, 2);
        let p = this.getAsymptoteX();
        let q = this.getAsymptoteY();
        return {A, p, q};
    }

    getAsymptoteX() {
        return -this.d / this.c;
    }
    getAsymptoteY() {
        return this.a / this.c;
    }
}