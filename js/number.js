class _Number {
    constructor(n) {
        this.n = n;
    }

    get() {
        return this.n;
    }

    static get(n) {
        if(IntegerNumber.is(n)) return new IntegerNumber(n);
        else return Fraction.get(n);
    }

    static is(n) {
        return typeof n == 'number' && isFinite(n) && n != null;
    }

    static identify(n) {
        if(IntegerNumber.is(n.get())) return new IntegerNumber(n.get());
        else return Fraction.reduce(n);
    }

    static sum(n1, n2) {
        return _Number.identify(Fraction.sum(Fraction.parse(n1), Fraction.parse(n2)));
    }

    static difference(n1, n2) {
        return _Number.identify(Fraction.difference(Fraction.parse(n1), Fraction.parse(n2)));
    }

    static multiply(n1, n2) {
        return _Number.identify(Fraction.multiply(Fraction.parse(n1), Fraction.parse(n2)));
    }

    static divide(n1, n2) {
        return _Number.identify(Fraction.divide(Fraction.parse(n1), Fraction.parse(n2)));
    }

    static GCD(n1, n2) {
        let result = n1;

        while(n2 != 0) {
            let t = n2;
            n2 = result % n2;
            result = t;
        }
        return result;
    }
    
    static LCM(n1, n2) {
        return (n1 * n2) / _Number.GCD(n1, n2);
    }

    static isPrime(n) {
        if(n < 2) return false;

        for(let i = 2; i <= Math.sqrt(n); i++) {
            if(n % i == 0) {
                return false;
            }
        }
        return true;
    }

    static isComposite(n) {
        if(n < 2) return false;
        return !_Number.isPrime(n);
    }

    static primeFactors(n) {
        if(_Number.isPrime(n)) return [n];
        let factors = [];
        
        let sqrt = Math.sqrt(n);
        for(let i = 2; i <= sqrt; i++) {
            while(n % i == 0) {
                factors.push(i);
                n /= i;
            }
            if(n == 1) {
                return factors;
            }
        }
        factors.push(n);
        return factors;
    }

    static isEven(n) {
        return n % 2 == 0;
    }
    static isOdd(n) {
        return n % 2 != 0;
    }

    static isDivisableBy(n1, n2) {
        return IntegerNumber.is(n1 / n2);
    }

    static multiplicativeInverse(n) {
        let f = Fraction.parse(n);
        return _Number.identify(new Fraction(f.denominator(), f.numerator()));
    }

    static additiveInverse(n) {
        return _Number.multiply(n, _Number.get(-1));
    }
}