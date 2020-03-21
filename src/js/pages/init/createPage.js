import app from '../../v/app';
import settings from '../../settings';

// create page according to the defined type

let createPage = function() {

    let page = app.page[0];



    // check existing pages

    let existingPage = false,
        defaultPage = false;

    for (let i = 0; i < app.vevetPages.length; i++) {
        let p = app.vevetPages[i];
        if (p.name == page) {
            existingPage = p;
        }
        if (p.name == settings.page.default) {
            defaultPage = p;
        }
    }



    // if the default page doesn't exist
    if (!existingPage) {
        if (!defaultPage) {
            throw new Error("Default page doesn't exist!");
        }
        else {
            defaultPage.create();
        }
    }
    else {
        existingPage.create();
    }

    

};

export default createPage;