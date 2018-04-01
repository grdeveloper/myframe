import {MyPipe} from "framework";

class AppMultiPipe extends MyPipe {
    constructor(config) {
        super (config);
    }
}

export const appMultiPipe = new AppMultiPipe({
    name: 'multi',
    transform(value, number = 2) {
        return +value * number;
    }
});