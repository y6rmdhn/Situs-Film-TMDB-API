import { fetchApi } from "../../../utils/fetchApi.js";
import Typography from "../../UI/typography/index.js";
import Image from "../../UI/image/index.js";
import Skeleton from "../../UI/skeleton/index.js";
import Navigation from "../../container/navigation/index.js";

class DetailPage {
    constructor() {
        this.state = {
            selectedItem: {},
            movieRate: {},
            isLoading: true,
            isLightMode: false,
        }
        this.containerDetailpage = document.createElement('div');
        this.init();
    }

    init(){
        this.getDetailMovie();
        this.render();
    }

    setState(newState){
        this.state = {...this.state, ...newState};
        this.render();
    }

    getDetailMovie(){
        //get detail (ID)
        const queryString = window.location.hash.split('=')[1];
        const urlPath = `titles/${queryString}`;
        fetchApi('GET', urlPath).then(result => {
            this.setState({selectedItem: result.results});
        })

        //get rating 
        const urlPathRating = `titles/${queryString}/ratings`;
        fetchApi('GET', urlPathRating).then(result => {
            this.setState({movieRate: result.results});
        })
        this.setState({isLoading: false});
    }

    render(){
        this.containerDetailpage.innerHTML = '';

        const navigation = new Navigation({ 
            setLightMode: value => this.setState({isLightMode: value}),
            isLightMode: this.state.isLightMode,
        });
        this.containerDetailpage.appendChild(navigation.render());

        // if statement
        if (this.state.selectedItem && this.state.movieRate &&
            Object.keys(this.state.selectedItem).length > 0 &&
            Object.keys(this.state.movieRate).length > 0) {
            this.containerDetailpage.appendChild(new Image({
                src: this.state.selectedItem.primaryImage?.url,
                alt: this.state.selectedItem.primaryImage?.caption.plainText,
                classname: 'image-detail-cover',
            }).render());

            const container = document.createElement('div');
            container.className = 'çontent-container';
            container.appendChild(new Image({
                src: this.state.selectedItem.primaryImage?.url,
                alt: this.state.selectedItem.primaryImage?.caption.plainText,
                classname: 'image-detail',
            }).render());
    
            const containerTextDetail = document.createElement('div');
            containerTextDetail.className = 'content-detail'
            containerTextDetail.appendChild(new Typography({
                variant: 'h1',
                children: `Title: ${this.state.selectedItem.originalTitleText.text}`
            }).render());
            containerTextDetail.appendChild(new Typography({
                variant: 'h2',
                children: `Release Year: ${this.state.selectedItem.releaseYear.year}`
            }).render());
            containerTextDetail.appendChild(new Typography({
                variant: 'h2',
                children: `Rating: ${this.state.movieRate.averageRating}`
            }).render());
    
            containerTextDetail.appendChild(new Typography({
                variant: 'h2',
                children: `Voters Count: ${this.state.movieRate.numVotes}`
            }).render());

            container.appendChild(containerTextDetail);
            this.containerDetailpage.appendChild(container);
        }else{
            // else statement
            this.containerDetailpage.appendChild(new Skeleton({ width: '100%', height: '400px' }).render());

            const container = document.createElement('div');
            container.className = 'çontent-container';
            container.appendChild(new Skeleton({ width: '300px', height: '350px' }).render());
    
            const containerTextDetail = document.createElement('div');
            containerTextDetail.appendChild(new Skeleton({ width: '300px', height: '50px' }).render());

            containerTextDetail.appendChild(new Skeleton({}).render());

            containerTextDetail.appendChild(new Skeleton({ width:'300px', height:'50px' }).render());
    
            containerTextDetail.appendChild(new Skeleton({ width: '300px', height: '50px' }).render());

            container.appendChild(containerTextDetail);
            this.containerDetailpage.appendChild(container);
        }


        return this.containerDetailpage;
    }
}

export default DetailPage;