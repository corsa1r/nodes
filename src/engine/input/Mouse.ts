import EventEmitter from '../EventEmitter';
import Point from '../../math/Point';

export default class Mouse extends EventEmitter {

    static EVENTS = {
        DRAG_START: 'drag_start',
        DRAG_END: 'drag_end',
        DRAG: 'drag'
    };

    public position: Point = new Point();
    private canvas: HTMLElement;
    private dragStarted: Boolean = false;

    constructor(canvas: HTMLElement) {
        super();
        this.canvas = canvas;
        this.attachEvents();
    }

    private attachEvents() {
        this.canvas.addEventListener('mousemove', (event: MouseEvent) => this.mouseMove(event));
    }

    private mouseMove(mouse: MouseEvent) {
        this.position.copy(mouse.clientX, mouse.clientY);

        if (mouse.which) {
            if (!this.dragStarted) {
                this.dragStarted = true;
                this.emit(Mouse.EVENTS.DRAG_START, this.position.clone());
            }
            this.emit(Mouse.EVENTS.DRAG, this.position.clone());
        } else if (this.dragStarted) {
            this.dragStarted = false;
            this.emit(Mouse.EVENTS.DRAG_END, this.position.clone());
        }
    }
}