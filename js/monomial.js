class Monomial {
    constructor(coeficient, degree=0) {
        if(degree < 0) throw new Error("Monomial degree cannot be negative!");
        this.coefficient = coeficient;
        this.degree = degree;
    }

    static sum(m1, m2) {
        if(m1.degree == m2.degree) return new Monomial(m1.coefficient + m2.coefficient, m1.degree);
        else return Polynomial.of([m1, m2]);
    }

    static difference(m1, m2) {
        return Monomial.sum(m1, new Monomial(-m2.coefficient, m2.degree));
    }

    static multiply(m1, m2) {
        return new Monomial(m1.coefficient * m2.coefficient, m1.degree + m2.degree);
    }

    static divide(m1, m2) {        
        if(m1.degree >= m2.degree) return new Monomial(m1.coefficient / m2.coefficient, m1.degree - m2.degree);
        else return new RationalFunction(new Monomial(m1.coefficient / m2.coefficient, 0), new Monomial(1, m2.degree - m1.degree));
    }
}