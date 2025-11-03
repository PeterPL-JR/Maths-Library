package com.peterpl.maths.number;

import java.math.*;

public class IntegerNumber extends RationalNumber {
    private final BigInteger n;

    protected IntegerNumber(BigInteger n) {
        super(n, new BigInteger("1"));
        this.n = n;
    }

    @Override
    public String toString() {
        return n.toString();
    }
}
