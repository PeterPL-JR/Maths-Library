class LawOfCosines {
    static a(b, c, cos) {
        let aq = 1;
        let bq = -2 * b * cos;
        let cq = b*b - c*c

        let [a1, a2] = new QuadraticFunction(aq, bq, cq).getZero();

        let isTriangle1 = Triangle.isPossible([a1, b, c]);
        let isTriangle2 = Triangle.isPossible([a2, b, c]);

        if(isTriangle1 && isTriangle2) return [a1, a2];
        else if(isTriangle1) return a1;
        else if(isTriangle2) return a2;
    }
    static b(a, c, cos) {
        return LawOfCosines.a(a, c, cos);
    }
    static c(a, b, cos) {
        return Math.sqrt(a*a + b*b - 2 * a * b * cos);
    }
    static cos(a, b, c) {
        return (a*a + b*b - c*c) / (2 * a * b);
    }
}