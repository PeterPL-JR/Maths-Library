class SquareRoot extends Root {
    static INDEX = 2;

    constructor(n) {
        super(n, SquareRoot.INDEX);
    }

    static get(n) {
        return Root.get(n, SquareRoot.INDEX);
    }
}