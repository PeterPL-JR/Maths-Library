class Log {
    constructor(base, n) {
        this.base = base;
        this.n = n;
    }

    get() {
        return Math.log(this.n) / Math.log(this.base);
    }
}