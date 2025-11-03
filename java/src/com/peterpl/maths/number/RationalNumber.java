package com.peterpl.maths.number;

import java.math.*;

public class RationalNumber extends _Number {
    private final BigInteger numerator;
    private final BigInteger denominator;

    protected RationalNumber(BigInteger numerator, BigInteger denominator) {
        super(new BigDecimal(numerator).divide(new BigDecimal(denominator), 10, RoundingMode.CEILING));

        this.numerator = numerator;
        this.denominator = denominator;
    }

    public BigInteger numerator() {
        return numerator;
    }

    public BigInteger denominator() {
        return denominator;
    }

    @Override
    public String toString() {
        return numerator + "/" + denominator;
    }
}
