import Point from '../math/Point';
import EventEmitter from '../engine/EventEmitter';
import Container from '../engine/Container';

import { iDisplayObject } from '../engine/interface/iDisplayObject';
import { iEvent } from '../engine/interface/iEvent';

export default class DisplayObject extends EventEmitter implements iDisplayObject {

    public position: Point = new Point();
    public parent: DisplayObject = null;
    private childs: Container = new Container();

    constructor() {
        super();
    }

    addChild(child: DisplayObject): DisplayObject {
        child.parent = this;
        this.childs.add(child);
        return this;
    }

    removeChild(child: DisplayObject): DisplayObject {
        this.childs.remove(child);
        return this;
    }

    update(event: iEvent) {

    }

    draw(context: CanvasRenderingContext2D) {

    }
}