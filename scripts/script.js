import '../fontawesome-free-6.5.1-web/js/all';
import '../bootstrap-5.3.2-dist/js/bootstrap.bundle'
import * as Popper from "@popperjs/core";
import devtools from './node_modules/devtools-detect/index.js';


window.addEventListener('devtoolschange', event => {
    $('html').addClass('dev-tools');
    event.detail.isOpen ? $('html').addClass('dev-tools') : $('html').removeClass('dev-tools');
});


/* TITLE PAGE */
var pageTitle = document.title;
window.addEventListener("blur", ()=> {
    document.title="-> Je suis là ! <-";
});
window.addEventListener("focus", ()=> {
    document.title = pageTitle;
});

