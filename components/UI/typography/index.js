class Typography {
    constructor(props) {
        const { variant, children, classname, onclick } = props;
        this.variant = variant;
        this.children = children;
        this.classname = classname;
        this.onclick = onclick
    }

    VARIANTS = {
        h1: 'h1',
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        h5: 'h5',
        h6: 'h6',
        p: 'p',
    }

    handleClick(){
        if (this.onclick) {
            this.onclick();
        }else{
            return;
        }
    }

    render(){
        const text = document.createElement(this.VARIANTS[this.variant]);
        text.onclick = this.handleClick.bind(this);
        text.innerHTML = this.children;
        text.className = this.classname;
        return text;
    }
}

export default Typography;