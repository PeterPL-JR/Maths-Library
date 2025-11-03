package com.peterpl.maths.number;

import java.math.*;

public abstract class _Number {
    private final BigDecimal n;

    protected _Number(BigDecimal n) {
        this.n = n;
    }

    public final BigDecimal get() {
        return n;
    }

    @Override
    public String toString() {
        return n.toString();
    }
}
