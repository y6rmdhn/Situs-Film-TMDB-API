import Typography from "../../UI/typography/index.js";

class Footer {
    constructor() {
        this.footerContainer = document.createElement('div');
        this.init()
    }

    init(){
        this.render()
    }

    render(){
        this.footerContainer.innerHTML = '';
        const copyright = new Typography({ 
            variant: 'p',
            children: 'Copyright 2024 Star Rail Movie',
            classname: 'Footer',
        })
        this.footerContainer.appendChild(copyright.render());
        return this.footerContainer;
    }
}

export default Footer;