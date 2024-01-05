class Root extends IrrationalNumber {
    constructor(base, index) {
        super();
        this.object = new RootObject(new IntegerNumber(base), new IntegerNumber(index));
    }

    get() {
        return Math.pow(this.base(), 1 / this.index());
    }

    base() {
        return this.object.radicant.get();
    }
    index() {
        return this.object.index.get();
    }

    static get(n, index) {
        if(_Number.isEven(index) && n < 0) {
            return;
        }
        if(Math.abs(n) == 1) {
            return _Number.get(1);
        }
        if(!IntegerNumber.is(n)) {
            let f = Fraction.get(n);
            return new QuotientObject(Root.get(f.numerator() * f.denominator(), index), new IntegerNumber(f.denominator()));
        }
        
        let primeFactors = _Number.primeFactors(n);

        let roots = [];
        let radicants = [];
        
        for(let f of Array.from(new Set(primeFactors))) {
            let count = primeFactors.filter((x) => x == f).length;
            
            if(_Number.isDivisableBy(count, index)) {
                roots.push(Math.pow(f, count / index));
            } else {
                radicants.push(f * count);
            }
        }
    
        let rate = 1;
        for(let n of roots) rate *= n;
        
        let radicant = 1;
        for(let n of radicants) radicant *= n;

        let sqrt = new Root(radicant, index);
        if(index == SquareRoot.INDEX) sqrt = new SquareRoot(radicant);
        if(index == CubeRoot.INDEX) sqrt = new CubeRoot(radicant);

        let number = _Number.get(rate);

        if(radicant == 1) {
            return number;
        }
        
        if(rate == 1) {
            return sqrt;
        } else {
            return new ProductObject(number, sqrt);
        }
    }
}