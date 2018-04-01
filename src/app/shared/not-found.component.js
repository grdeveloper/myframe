import {MyComponent} from "framework";

class NotFound extends MyComponent {
    constructor(config) {
        super(config);
    }
}

export const notFound =  new NotFound({
    selector: 'app-not-found',
    template: `
    <div style="display: flex; align-items: center; justify-content: center">
        <div>
            <h2 class="red darken-1">Page Not Found</h2>
            <a href="#">Go to Home Page</a>
        </div>
    </div>
   `
});