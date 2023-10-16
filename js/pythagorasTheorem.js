class PythagorasTheorem {
    static a(b, c) {
        return Math.sqrt(c*c - b*b);
    }
    static b(a, c) {
        return PythagorasTheorem.a(a, c);
    }
    static c(a, b) {
        return Math.sqrt(a*a + b*b);
    }
}