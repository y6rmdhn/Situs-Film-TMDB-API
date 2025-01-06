class Select {
    constructor(props) {
            const { options, selectedValue, onChange, width } = props;
            this.options = options;
            this.selectedValue = selectedValue;
            this.onChange = onChange;
            this.width = width;
    }


    render(){
        const select = document.createElement('select');
        select.className = 'form-select';
        select.style.width = this.width;
        this.options.forEach(option => {
            const optionElement = document.createElement('option');
            optionElement.value = option.value;
            optionElement.textContent = option.text;
            if(option.value === this.selectedValue){
                optionElement.selected = true;
            }

            select.appendChild(optionElement);
        });
        select.addEventListener('change', (event) => {
            this.onChange(event.target.value);
        })

        return select;
    }
}

export default Select;