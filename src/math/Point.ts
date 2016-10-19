export default class Point {

    public x: number;
    public y: number;

    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }

    clone(): Point {
        return new Point(this.x, this.y);
    }

    copy(x: Point | number, y?: number): Point {
        if (x instanceof Point) {
            this.x = x.x;
            this.y = x.y;
        } else {
            this.x = x;
            this.y = y;
        }

        return this;
    }

    multiply(by: number): Point {
        this.x *= by;
        this.y *= by;
        return this;
    }

    devide(by: number): Point {
        this.x /= by;
        this.y /= by;
        return this;
    }

    negate(): Point {
        return this.multiply(-1);
    }

    same(b: Point): Boolean {
        return this.x === b.x && this.y === b.y;
    }

    sum(x: Point | number, y?: number): Point {
        if (x instanceof Point) {
            this.x += x.x;
            this.y += x.y;
        } else {
            this.x += x;
            this.y += y;
        }

        return this;
    }

    sub(x: Point | number, y?: number): Point {
        if (x instanceof Point) {
            this.x -= x.x;
            this.y -= x.y;
        } else {
            this.x -= x;
            this.y -= y;
        }

        return this;
    }

    diff(b: Point): Point {
        return this.clone().sub(b);
    }
}