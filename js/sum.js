class Sum {
    constructor(mfunction, start, end) {
        this.mfunction = mfunction;

        this.start = start;
        this.end = end;
    }

    get() {
        let sum = 0;
        for(let i = this.start; i <= this.end; i++) {
            sum += this.mfunction.get(i);
        }
        return sum;
    }
}