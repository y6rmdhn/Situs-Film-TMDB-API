import { route } from "./utils/router.js";

const hashControl = () => {
    const hash = window.location.hash.substring(1);
    route(hash);
}

document.addEventListener('DOMContentLoaded', () => {

    if (window.location.hash === '') {
        history.replaceState(null, null, '#');
    }
    hashControl();
})

window.addEventListener('hashchange', hashControl);