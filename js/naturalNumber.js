class NaturalNumber extends IntegerNumber {
    static is(n) {
        return IntegerNumber.is(n) && n >= 0;
    }
}