class Polygon extends PlaneFigure {
    constructor(sides) {
        if(sides.find((e) => e <= 0)) throw new Error("Polygon sides must be positive numbers!");
        if(!Polygon.isPossible(sides)) throw new Error("You cannot build a polygon with these sides!");
        super();

        this.sides = sides;
    }

    perimeter() {
        let sum = 0;
        for(let side of this.sides) {
            sum += side;
        }
        return sum;
    }

    area() {
    }

    static isPossible(sides) {
        for(let side of sides) {
            if(side <= 0) {
                return false;
            }
        }

        let max = Math.max(...sides);
        let sum = 0;
        for(let side of sides) {
            sum += side;
        }
        return (sum - max) > max;
    }
}