import About from "../components/pages/about/index.js";
import DetailPage from "../components/pages/detailpage/index.js";
import Homepage from "../components/pages/homepage/index.js";
import NotFoundPage from "../components/pages/notFound/index.js";

const ROUTES = {
    home: () => new Homepage().render(),
    detail: () => new DetailPage().render(),
    about: () => new About().render(),
    _404: () => new NotFoundPage().render(),
}

export const route = (hash) => {
    const appContainer = document.getElementById('app');
    appContainer.innerHTML = '';
    const hashRoute = hash === '' ? 'home' : hash.split('?')[0];
    const isAvailablePage = ROUTES.hasOwnProperty(hashRoute);
    if (isAvailablePage) {
        appContainer.appendChild(ROUTES[hashRoute]())
    }else{
        appContainer.appendChild(ROUTES['_404']());
    }
}