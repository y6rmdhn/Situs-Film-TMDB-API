import Typography from "../../UI/typography/index.js";

class NotFoundPage {
    constructor() {
        this.notFoundContainer = document.createElement('div');
        this.init();
    }

    init(){
        this.render();
    }

    render(){
        this.notFoundContainer.innerHTML = '';
        const title = new Typography({
            variant: 'h1',
            children: 'This Page not developed yet :(',
            classname: 'not-found',
        })

        this.notFoundContainer.appendChild(title.render());
        return this.notFoundContainer;
    }
}

export default NotFoundPage;