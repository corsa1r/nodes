import Ticker from '../engine/Ticker';
import NodesContainer from '../components/NodesContainer';
import DisplayObject from '../engine/DisplayObject';
import Mouse from '../engine/input/Mouse';
import Node from '../components/Node';
import Point from '../math/Point';

import { iEvent } from '../engine/interface/iEvent';

export default class Scene {

    public nodes: NodesContainer = new NodesContainer();
    public ticker: Ticker = new Ticker();
    public canvas: any;//HTMLElement
    public context: CanvasRenderingContext2D;
    public mouse: Mouse;

    constructor() {
        this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
        this.context = this.canvas.getContext('2d');
        this.mouse = new Mouse(this.canvas);

        this.ticker.on(Ticker.EVENT_TICK, (e) => this.update(e));
        this.ticker.start();

        let node_a = new Node();
        let node_b = new Node();

        node_b.position.x = 300;
        node_b.position.y = 300;

        this.nodes.add(node_a);
        this.nodes.add(node_b);

        this.handleMouseDrag();
    }

    handleMouseDrag() {
        this.mouse.on(Mouse.EVENTS.DRAG_START, (point: Point) => {
            this.nodes.findByPoint(point).each((node: Node) => node.startDrag(node.position.diff(point)));
        });

        this.mouse.on(Mouse.EVENTS.DRAG_END, (point: Point) => {
            this.nodes.findByPoint(point).each((node: Node) => node.endDrag());
        });

        this.mouse.on(Mouse.EVENTS.DRAG, (point: Point) => {
            this.nodes.findByPoint(point).each((node: Node) => node.move(point));
        });
    }

    update(event: iEvent) {
        this.nodes.each((node: Node) => node.update(event));
        this.draw();
    }

    draw() {
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        this.nodes.each((node: Node) => node.draw(this.context));
    }
}