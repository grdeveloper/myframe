import {renderComponent} from "./render.component";
import {_} from "../../tools/util";

export function initComponents(bootstrap, components) {
    // this.bootstrapComponent.render();
    // this.components.forEach(renderComponent);

    if(_.isUndefined(bootstrap)){
        throw new Error(`Bootstrap component is not defined`);
    }

    [bootstrap, ...components].forEach(renderComponent);
}