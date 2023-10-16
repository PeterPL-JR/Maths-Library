class Angle {
    static IN_DEGREES = 0;
    static IN_RADIANS = 1;

    constructor(size, type = Angle.IN_DEGREES) {
        this.size = size;
        this.type = type;
    }

    degrees() {
        return this.type == Angle.IN_DEGREES ? this.size : Angle.degrees(this.size);
    }
    radians() {
        return this.type == Angle.IN_RADIANS ? this.size : Angle.radians(this.size);
    }

    sin() {
        return Math.sin(this.radians());
    }
    cos() {
        return Math.cos(this.radians());
    }
    tan() {
        if(this.cos() != 0) return this.sin() / this.cos();
    }
    cot() {
        if(this.sin() != 0) return this.cos() / this.sin();
    }

    static degrees(radians) {
        return radians * 180 / Math.PI;
    }
    static radians(degrees) {
        return degrees * Math.PI / 180;
    }
}