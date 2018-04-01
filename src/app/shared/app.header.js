import {MyComponent} from "framework";

class AppHeader extends MyComponent {
    constructor(config) {
        super(config);
    }
}

export const appHeader =  new AppHeader({
   selector: 'app-header',
   template: `
    <nav class="indigo">
    <div class="nav-wrapper">
      <a href="#" class="brand-logo 
      header__logo"
      >My Little Angular</a>
      <ul class="right hide-on-med-and-down">
        <li><a href="#">Home</a></li>
        <li><a href="#tabs">Tabs</a></li>
        <li><a href="#directive">Directives</a></li>
        <li><a href="#pipe">Pipes</a></li>
      </ul>
    </div>
  </nav>
   `,
    styles: `
        .header__logo{
            margin-left: 20px;
        }
    `
});