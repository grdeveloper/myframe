import {MyComponent} from "framework";

class PipePageComponent extends MyComponent {
    constructor(config) {
        super(config);

        this.data = {
            number: 10
        }
    }
}

export const pipePageComponent =  new PipePageComponent({
    selector: 'app-pipe-page',
    template: `
        <div class="row">
            <div class="col s6 offset-s3 pipe__block">
              <h4>{{ number }}</h4>
              <h4>{{ number | multi }}</h4>
            </div>
        </div>
    `,
    styles: `
        .pipe__block{
            margin-top: 30px;
        }
    `
});