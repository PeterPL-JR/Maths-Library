class Fraction extends RationalNumber {
    constructor(numerator, denominator) {
        super();
        this.object = new QuotientObject(new IntegerNumber(numerator), new IntegerNumber(denominator));
    }

    get() {
        return this.numerator() / this.denominator();
    }

    numerator() {
        return this.object.dividend.get();
    }
    denominator() {
        return this.object.dividor.get();
    }

    static get(n) {
        if(!RationalNumber.is(n)) return;

        let numerator = n;
        let denominator = 1;
        
        do {
            numerator *= 10;
            denominator *= 10;
        } while(!IntegerNumber.is(numerator));

        return Fraction.reduce(new Fraction(numerator, denominator));
    }

    static parse(n) {
        if(n.constructor.name == "IntegerNumber") return new Fraction(n.get(), 1);
        if(n.constructor.name == "Fraction") return n;
    }

    static sum(f1, f2) {
        let numerator = f1.numerator() * f2.denominator() + f2.numerator() * f1.denominator();
        let denominator = f1.denominator() * f2.denominator();
        return Fraction.reduce(new Fraction(numerator, denominator))
    }

    static difference(f1, f2) {
        return Fraction.sum(f1, Fraction.parse(_Number.additiveInverse(f2)));
    }

    static multiply(f1, f2) {
        return Fraction.reduce(new Fraction(f1.numerator() * f2.numerator(), f1.denominator() * f2.denominator()));
    }

    static divide(f1, f2) {
        return Fraction.multiply(f1, Fraction.parse(_Number.multiplicativeInverse(f2)));
    }

    static reduce(n) {
        let gcd = _Number.GCD(n.numerator(), n.denominator());
        
        let numerator = n.numerator() / gcd;
        let denominator = n.denominator() / gcd;
        
        return new Fraction(numerator, denominator);
    }
}