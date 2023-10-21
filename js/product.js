class Product {
    constructor(mfunction, start, end) {
        this.mfunction = mfunction;

        this.start = start;
        this.end = end;
    }

    get() {
        let product = 1;
        for(let i = this.start; i <= this.end; i++) {
            product *= this.mfunction.get(i);
        }
        return product;
    }
}