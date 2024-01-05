class IntegerNumber extends RationalNumber {
    constructor(n) {
        super(parseInt(n));
    }

    static is(n) {
        return RationalNumber.is(n) && Number.isInteger(n);
    }

    static sum(n1, n2) {
        return new IntegerNumber(n1.get() + n2.get());
    }
    
    static difference(n1, n2) {
        return new IntegerNumber(n1.get() - n2.get());
    }
    
    static multiply(n1, n2) {
        return new IntegerNumber(n1.get() * n2.get());
    }
    
    static divide(n1, n2) {
        return n1.get() / n2.get();
    }
}