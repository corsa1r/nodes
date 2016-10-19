import Container from './Container';

export default class EventEmitter extends Container {

    constructor() {
        super();
    }

    public on(name: string, callback: Function) {
        this.add(callback, name);
        return this;
    }

    public off(name: string) {
        this.eachByName(name).each((eventCallback) => this.remove(eventCallback));
        return this;
    }

    public emit(name: string, param1: any = undefined, param2: any = undefined, optionsParam: Object = {}) {
        this.eachByName(name).each((callback: Function) => callback(param1, param2, optionsParam));
        return this;
    }
}