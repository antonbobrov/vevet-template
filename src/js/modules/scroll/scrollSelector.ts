// get scroll selector

import scrollCanBeCustom from "./scrollCanBeCustom";
import { ScrollModule } from "vevet";
import customScroll from "./customScroll";
import { one } from "select-el";

// it can be used in many modules, f.e., Vevet.View
function scrollSelector(): (HTMLElement | ScrollModule) {
    const selector = one('.scroll');
    if (scrollCanBeCustom()) {
        const scroll = customScroll.get();
        if (scroll instanceof ScrollModule) {
            return scroll;
        }
    }
    return selector;
}

export default scrollSelector;