import Container from '../engine/Container';
import Point from '../math/Point';
import Node from '../components/Node';

export default class NodesContainer extends Container {

    constructor() {
        super();
    }

    findByPoint(point: Point): NodesContainer {
        let found = new NodesContainer();
        this.each((node: Node) => {
            if (node.isBelow(point)) found.add(node);
        });
        return found;
    }
}