import scrollSelector from '../../helpers/scrollSelector';
import settings from '../../settings';
import app from '../../v/app';
import { View } from 'vevet';
import viewChildren from './viewChildren';


// settings for the view
const vs = settings.view;


// the module lets elements animate when they appear into the viewport
function view() {


    // view children
    viewChildren();

    // initialize view
    let v = new View({
        parent: app.vevetPage,
        selectors: {
            outer: scrollSelector(),
            elements: '.v-view',
            inside: false
        },
        on: false,
        seekInit: false,
        classToAdd: 'v-viewed',
        stackDelay: 75,
        resizeTimeout: settings.resizeTimeout,
        edge: 1,
        autostack: vs.autostack
    });



    // add event on resize
    app.viewport.on("", () => {
        v.changeProp({
            selectors: {
                outer: scrollSelector()
            }
        });
    });



    return v;


    
}

export default view;