class Switch {
    constructor({ setLightMode, isChecked }) {
        this.switchButton = document.createElement('input');
        this.switchButton.type = 'checkbox';
        this.switchButton.id = 'switch-toogle';
        this.switchButton.className = 'switch-toogle';
        this.switchButton.checked = isChecked;

        this.switchLabel = document.createElement('label');
        this.switchLabel.htmlFor = 'switch-toogle';
        this.switchLabel.className = 'switch-label';

        this.switchContainer = document.createElement('div');
        this.switchContainer.className = 'switch-container';
        this.switchContainer.appendChild(this.switchButton);
        this.switchContainer.appendChild(this.switchLabel)

        this.attachEventListener();
        this.setLightMode = setLightMode;
    }

    attachEventListener(){
        this.switchButton.addEventListener('change', () => {
            this.onChange(this.switchButton.checked);
        })
    }

    onChange(isChecked){
        this.setLightMode(isChecked)
    }

    render(){
        return this.switchContainer;
    }
}

export default Switch;
