class Monomial {
    constructor(coefficient, variables=[]) {
        this.coefficient = coefficient;
        this.variables = Monomial.reduce(variables);
    }

    get(values) {
        let result = this.coefficient;
        for(let v of this.variables) {
            if(Object.keys(values).indexOf(v.letter) == -1) return;

            let value = values[v.letter];
            result *= Math.pow(value, v.degree);
        }
        return result;
    }

    static sum(m1, m2) {
        if(Monomial.isSimilar(m1, m2)) return new Monomial(m1.coefficient + m2.coefficient, m1.variables);
        else return new Polynomial([m1, m2]);
    }

    static difference(m1, m2) {
        return Monomial.sum(m1, new Monomial(-m2.coefficient, m2.variables));
    }

    static multiply(m1, m2) {
        return new Monomial(m1.coefficient * m2.coefficient, [...m1.variables, ...m2.variables]);
    }

    // TODO
    static divide(m1, m2) {
    }

    degree() {
        let sum = 0;
        for(let v of this.variables) {
            sum += v.degree;
        }
        return sum;
    }

    static isSimilar(m1, m2) {
        let v1 = Monomial.reduce(m1.variables);
        let v2 = Monomial.reduce(m2.variables);

        if(v1.length != v2.length) return false;

        for(let i = 0; i < v1.length; i++) {
            if(!(v1[i].letter == v2[i].letter && v1[i].degree == v2[i].degree)) return false;
        }
        return true;
    }

    static reduce(variables) {
        let reduced = [];
        for(let v of variables) {
            let index = reduced.findIndex((e) => e.letter == v.letter);
            if(index == -1) {
                reduced.push(v.copy());
                continue;
            }
            reduced[index].degree += v.degree;
        }
        return Monomial.sort(reduced.filter((e) => e.degree != 0));
    }

    static sort(variables) {
        let sorted = Array.from(variables);
        sorted.sort((e1, e2) => e1.letter.charCodeAt(0) - e2.letter.charCodeAt(0));
        return sorted;
    }
    
    copy() {
        let variables = [];
        for(let v of this.variables) {
            variables.push(v.copy());
        }
        return new Monomial(this.coefficient, variables);
    }
}