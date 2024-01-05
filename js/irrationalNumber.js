class IrrationalNumber extends RealNumber {
    static is(n) {
        return !RationalNumber.is(n);
    }
}