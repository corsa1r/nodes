import EventEmitter from './EventEmitter';
import { iEvent } from './interface/iEvent';

const FPS = 1000 / 60;

export default class Ticker extends EventEmitter {

    static EVENT_TICK = 'tick';

    private clock: any = null;
    private lastTime: number = 0;

    start(): Ticker {
        if (!this.clock) {
            this.lastTime = Date.now();
            this.clock = setInterval(() => this.tick(), FPS);
        }

        return this;
    }

    stop(): Ticker {
        if (this.clock) {
            clearInterval(this.clock);
            this.clock = null;
        }

        return this;
    }

    tick(): Ticker {
        let now = Date.now();
        let delta = (now - this.lastTime) / 1000;
        let event: iEvent = { delta: delta, time: now };
        this.emit(Ticker.EVENT_TICK, event);
        return this;
    }
}