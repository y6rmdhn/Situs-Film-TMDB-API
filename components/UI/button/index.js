class Button {
    constructor(props){
        const { text, variant, onclick, disabled, className } = props;
        this.handleClick = this.handleClick.bind(this);
        this.text = text;
        this.className = className;
        this.variant = variant;
        this.onclick = onclick;
        this.disabled = disabled
    }

    handleClick(){
        if (this.onclick) {
            this.onclick();
        }else{
            console.log('terclick');
        }
    }

    render(){
        const myButton = document.createElement('button');
        if (typeof this.text === 'string') {
            myButton.innerHTML = this.text;
        }else if (this.text instanceof HTMLElement) {
            myButton.appendChild(this.text);
        }
        myButton.className = `btn btn-${this.variant} ${this.className}`;
        myButton.disabled = this.disabled;
        myButton.addEventListener('click', this.handleClick.bind(this));

        return myButton;
    }
}

export default Button;