import MovieItem from "../movieItem/index.js";
import Button from "../../UI/button/index.js";
import Loader from "../../UI/loader/index.js";

class MovieList {
    constructor(props) {
        const { movieItems, loadMoreMovie, isLoading } = props;
        this.movieItems = movieItems;
        this.isLoading = isLoading;
        this.containerMovieList = document.createElement('div');
        this.movieWarpper = document.createElement('div');
        this.containerMovieList.className = 'movie-list'
        this.loadMoreMovie = loadMoreMovie;
    }

    render(){        
        this.movieItems.map(movie => {
            const movieTitle = new MovieItem({
                movie,
            });
            this.containerMovieList.appendChild(movieTitle.render());
        });

        this.movieWarpper.appendChild(this.containerMovieList);
        
        if(this.movieItems.length > 0){
            this.movieWarpper.appendChild(
                new Button({
                    text: this.isLoading ? new Loader().render() : 'Load More',
                    variant: 'primary',
                    onclick: () => this.loadMoreMovie(),
                    className: 'load-more',
                    disabled: this.isLoading,
                }).render(),
            )
        }
        

        return this.movieWarpper;
    }
}

export default MovieList;