import {MyComponent, router, http, _} from "framework";

class HomePageComponent extends MyComponent {
    constructor(config) {
        super(config);

        this.data = {
            title: 'Home page',
            link: 'Switch to other page',
            ip: 'Loading...'
        }
    }

    events() {
        return {
            'click .js-link': 'goToTabs'
        }
    }

    afterInit() {
        http.get('https://api.ipify.org/?format=json')
            .then(({ip}) => {
                _.delay(2000).then(() => {
                    this.data.ip = ip;
                    this.render();
                });
            });
    }

    // onInit() {
    //     alert("Component Init");
    // }

    // afterInit() {
    //     alert("Component AfterInit");
    // }

    goToTabs(event) {
        event.preventDefault();
        router.navigate('tabs');
    }
}

export const homePageComponent =  new HomePageComponent({
    selector: 'app-home-page',
    template: `<div class="row">
        <div class="col s6 offset-s3 home__block">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">{{ title }}</span>
              <p>{{ ip }}</p>
            </div>
            <div class="card-action">
              <a href="#" class="js-link">{{ link }}</a>
            </div>
          </div>
        </div>
      </div>`,
    styles: `
        .home__block{
            margin-top: 40px;
        }
    `
});