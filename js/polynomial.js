class Polynomial {
    constructor(elements) {
        this.elements = Polynomial.reduce(elements);
    }

    get(values) {
        let result = 0;
        for(let elem of this.elements) {
            let value = elem.get(values);
            if(!isFinite(value)) return;

            result += value;
        }
        return result;
    }

    static sum(p1, p2) {
        return new Polynomial([...p1.elements, ...p2.elements]);
    }

    static difference(p1, p2) {
        p2 = p2.copy();
        for(let i = 0; i < p2.elements.length; i++) {
            let m = p2.elements[i];
            p2.elements[i] = new Monomial(-m.coefficient, m.variables);
        }
        return Polynomial.sum(p1, p2);
    }

    static multiply(p1, p2) {
        if(typeof p2 == "number") p2 = new Polynomial([p2]);
        let elements = [];
        for(let m1 of p1.elements) {
            for(let m2 of p2.elements) {
                elements.push(Monomial.multiply(m1, m2));
            }
        }
        return new Polynomial(elements);
    }

    static divide(p1, p2) {
        if(typeof p2 == "number") p2 = new Polynomial([p2]);
        let divided = [];
        let rest = p1;

        while(rest.degree() >= p2.degree()) {
            let result = Monomial.divide(rest.elements[0], p2.elements[0]);
            if(!result) return;

            rest = Polynomial.difference(rest, Polynomial.multiply(p2, new Polynomial([result])));
            divided.push(result);
        }
        return new Polynomial(divided);
    }

    degree() {
        let degrees = [];

        for(let m of this.elements) {
            degrees.push(m.degree());
        }
        return Math.max(...degrees);
    }

    coefficients() {
        let coefficients = [];
        for(let m of this.elements) {
            coefficients.push(m.coefficient);
        }
        return coefficients;
    }

    static reduce(elements) {
        let reduced = [];
        for(let m of elements) {
            if(typeof m == "number") m = new Monomial(m);
            let index = reduced.findIndex((e) => Monomial.isSimilar(e, m));
            if(index == -1) {
                reduced.push(m);
                continue;
            }
            reduced[index] = Monomial.sum(reduced[index], m);
        }
        return Polynomial.sort(reduced.filter((e) => e.coefficient != 0));
    }

    static sort(elements) {
        let sorted = Array.from(elements);
        sorted.sort((e1, e2) => e2.degree() - e1.degree());
        return sorted;
    }

    copy() {
        let elements = [];
        for(let elem of this.elements) {
            elements.push(elem.copy());
        }
        return new Polynomial(elements);
    }
}