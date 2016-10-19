import { iEvent } from './iEvent';

export interface iDisplayObject {
    update(event: iEvent): void;
    draw(context: CanvasRenderingContext2D): void;
}