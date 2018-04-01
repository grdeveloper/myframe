import {MyComponent} from "framework";

class AppComponent extends MyComponent {
    constructor(config) {
        super(config);
    }
}

export const appComponent =  new AppComponent({
    selector: 'app-root',
    template: `
        <app-header></app-header>
        
        <router-outlet></router-outlet>
    `
});