class Square extends Rectangle {
    constructor(a) {
        super(a, a);
    }

    a() {
        return super.a() | super.b();
    }
    b() {
    }

    area() {
        return this.a() * this.a();
    }

    diagonal() {
        return this.a() * Math.sqrt(2);
    }
}