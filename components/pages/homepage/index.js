import { fetchApi } from "../../../utils/fetchApi.js";
import FilterMovie from "../../container/FilterMovie/index.js";
import Footer from "../../container/footer/index.js";
import MovieList from "../../container/MovieList/index.js";
import Navigation from "../../container/navigation/index.js";
import Typography from "../../UI/typography/index.js";

class Homepage {
    constructor() {
        this.state = {
            isLoading: true,
            filterType: '',
            filterYear: '',
            movieList: [],
            page: 1,
            movie: [],
            moviePage: 1,
            isLightMode: false,
        }
        this.containerHomepage = document.createElement('div');
        this.init();
    }

    setState = (newState) => {
        this.state = {...this.state, ...newState};
        this.render();
    }

    init(){
        if (window.location.hash === '') {
            this.getDataMovie();
            this.render();
        }
    }

    getDataMovie(pageParam = 1, type = 'get'){
        this.setState({ isLoading: true });

        // fetch for movie list
        const page = type === 'get' ? 1 : pageParam;
        let urlPath = `titles/x/upcoming?limit=4&page=${page}&sort=year.decr`;

        if (this.state.filterType !== '') {
            urlPath += `&titleType=${this.state.filterType}`;   
        }else if (this.state.filterYear !== '') {
            urlPath += `&year=${this.state.filterYear}`;
        }

        fetchApi('GET', urlPath).then(result => {

            if (type === 'get') {
                this.setState({ movieList: result.results });
                
            }else{
                this.setState({ movieList: [...this.state.movieList, ...result.results] });

            }
        })


        // fetch for movie
        const pageMovie = type === 'get' ? 1 : pageParam;
        let year = '2024';
        let urlPathMovie = `titles?limit=4&page=${pageMovie}&sort=year.decr&year=${year}`;

        if (this.state.filterType !== '') {
            urlPath += `&titleType=${this.state.filterType}`;   
        }else if (this.state.filterYear !== '') {
            year += this.state.filterYear;
        }

        fetchApi('GET', urlPathMovie).then(result => {

            if (type === 'get') {
                this.setState({ movie: result.results });
                
            }else{
                this.setState({ movie: [...this.state.movie, ...result.results] });

            }
        })
        this.setState({ isLoading: false });
    }

    loadMoreMovie(params){
        this.setState({isLoading: true});
        if (params === 'upcoming') {
            this.setState({page: this.state.page + 1});
            this.getDataMovie(this.state.page + 1, 'load');
        }else{
            this.setState({moviePage: this.state.moviePage + 1});
            this.getDataMovie(this.state.moviePage + 1, 'load');
        }
        
    }

    render(){
        this.containerHomepage.innerHTML = '';   
        if (this.state.isLightMode) {
            document.body.className = 'body-container'
        }else{
            document.body.className = 'body-container-light'
        }
        
        const navigation = new Navigation({ 
            setLightMode: (value) => this.setState({isLightMode: value}),
            isLightMode: this.state.isLightMode,
        });
        this.containerHomepage.appendChild(navigation.render());

        this.containerHomepage.appendChild(new FilterMovie({
            submitFilter: () => this.getDataMovie(),
            setType: (value) => { this.setState({ filterType: value })},
            setYear: (value) => { this.setState({ filterYear: value })},
            type: this.state.filterType,
            year: this.state.filterYear,
            isLoading: this.state.isLoading,
        }).render());


        // up coming movie
        const textUpComing = new Typography({
            children: 'Up Coming',
            variant: 'h1',
        });
        this.containerHomepage.appendChild(textUpComing.render());

        this.containerHomepage.appendChild(
            new MovieList({ 
                movieItems: this.state.movieList, 
                loadMoreMovie: () => this.loadMoreMovie('upcoming'),
                isLoading: this.state.isLoading, 
            }).render());


        // Movie this year 
            const textThisYear = new Typography({
                children: 'Movie of the year',
                variant: 'h1',
            });
            this.containerHomepage.appendChild(textThisYear.render());

            this.containerHomepage.appendChild(
                new MovieList({ 
                    movieItems: this.state.movie, 
                    loadMoreMovie: () => this.loadMoreMovie('movie'),
                    isLoading: this.state.isLoading, 
                }).render());

            this.containerHomepage.appendChild(new Footer().render());

        return this.containerHomepage;
    }
}

export default Homepage;