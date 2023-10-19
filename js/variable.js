class Variable {
    // TODO
    constructor(letter, degree=1) {
        this.letter = letter;
        this.degree = degree;
    }
    copy() {
        return new Variable(this.letter, this.degree);
    }
}