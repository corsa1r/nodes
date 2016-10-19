import DisplayObject from '../engine/DisplayObject';
import Point from '../math/Point';

export default class Node extends DisplayObject {

    public size: Point;

    private dragStartsFrom: Point;
    private draggable: Boolean;

    constructor() {
        super();

        this.size = new Point(120, 60);

        this.position.x = 10;
        this.position.y = 10;

        this.setDraggable(false);
    }

    move(position: Point) {
        if (!this.isDraggable()) return;
        this.position.copy(position.sum(this.dragStartsFrom));
    }

    draw(context: CanvasRenderingContext2D) {
        context.beginPath();
        context.fillStyle = 'blue';
        context.rect(this.position.x, this.position.y, this.size.x, this.size.y);
        context.fill();

        if (this.isDraggable()) {
            console.log('cast shadow');
        }

        context.closePath();
    }

    isBelow(point: Point): Boolean {
        let c1 = point.x > this.position.x;
        let c2 = point.x < this.position.x + this.size.x;
        let c3 = point.y > this.position.y;
        let c4 = point.y < this.position.y + this.size.y;

        return c1 && c2 && c3 && c4;
    }

    setDraggable(status: Boolean): Node {
        this.draggable = status;
        return this;
    }

    startDrag(from: Point): Node {
        this.dragStartsFrom = from;
        this.setDraggable(true);
        return this;
    }

    endDrag(): Node {
        this.setDraggable(false);
        return this;
    }

    isDraggable(): Boolean {
        return this.draggable;
    }
}