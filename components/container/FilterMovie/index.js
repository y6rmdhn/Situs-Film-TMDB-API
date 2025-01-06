import Button from "../../UI/button/index.js";
import Select from "../../UI/select/index.js";

class FilterMovie {
    constructor(props) {
        const { submitFilter, isLoading, setType,  setYear, type, year} = props;
        this.containerFilterMovie = document.createElement('div');
        this.submitFilter = submitFilter;
        this.isLoading = isLoading;
        this.setType = setType;
        this.setYear = setYear;
        this.type = type;
        this.year = year;
    }

    render(){
        this.containerFilterMovie.className = 'filter-container';
        const btnFilterMovie = new Button({
            text: 'Search',
            variant: 'biru',
            onclick: () => this.submitFilter(),
            disabled:  this.isLoading,
        });

        this.containerFilterMovie.appendChild(new Select({
            options: [
                { value:'', text: 'Select Type' },
                { value:'movie', text: 'Movie' },
                { value:'short', text: 'Short' },
            ],
            selectedValue: this.type,
            onChange: (value) => {
                this.setType(value);
            },
            with: '100px',
            
        }).render());

        this.containerFilterMovie.appendChild(new Select({
            options: [
                { value:'', text: 'Select Year' },
                { value:'2024', text: '2024' },
                { value:'2023', text: '2023' },
                { value:'2022', text: '2022' },
                { value:'2021', text: '2021' },
                { value:'2020', text: '2020' },
            ],
            selectedValue: this.year,
            onChange: (value) => {
                this.setYear(value);
            },
            with: '200px',
            
        }).render());

        this.containerFilterMovie.appendChild(btnFilterMovie.render());

        return this.containerFilterMovie;
    }
}

export default FilterMovie;