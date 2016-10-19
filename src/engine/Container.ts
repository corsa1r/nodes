export default class Container {

    private items: Array<any> = [];
    private names: Array<any> = [];

    public add(item: any, name: string = '') {
        this.items.push(item);
        this.names.push(name);
    }

    public indexOf(what: any) {
        if (typeof what === 'string' || what instanceof String) {
            return this.names.indexOf(what);
        }

        return this.items.indexOf(what);
    }

    public get(what: any) {
        return this.items[this.indexOf(what)];
    }

    public remove(what: any) {
        let index = this.indexOf(what);

        this.items.splice(index, 1);
        this.names.splice(index, 1);

        return this;
    }

    public has(what: any) {
        return Boolean(this.get(what));
    }

    public each(iterator: Function) {
        for (let i = 0, len = this.names.length; i < len; i++) {
            if (iterator(this.items[i], this.names[i]) === false) {
                break;
            }
        }

        return this;
    }

    public eachByName = function (name: string) {
        var resultContainer = new Container();

        this.each((item, itemName) => {
            if (itemName === name) {
                resultContainer.add(item, itemName);
            }
        });

        return resultContainer;
    };

    public len() {
        return this.names.length;
    }

    public first() {
        return this.items[0];
    }

    public last() {
        return this.items[this.len() - 1];
    }
}