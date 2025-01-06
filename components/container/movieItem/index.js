import ImageComponent from "../../UI/image/index.js";
import Typography from "../../UI/typography/index.js";

class MovieItem {
    constructor(props) {
        const { movie } = props;
        this.movie = movie;
        this.movieItemContainer = document.createElement('div');
        this.movieItemContainer.className = 'movie-card';
        this.movieItemContainer.onclick = () => {
            window.location.hash = `detail?id=${this.movie.id}`;
        }
    }

    render(){
        const divImage = document.createElement('div');
        divImage.className = 'image-container';

        divImage.appendChild(
            new ImageComponent({
                src: this.movie.primaryImage?.url,
                alt: this.movie.titleText?.text,
                classname: 'img-movie',
            }).render(),
        );
        this.movieItemContainer.appendChild(divImage);
        
        const divInfo = document.createElement('div');
        divInfo.className = 'info-container';
        this.movieItemContainer.appendChild(divInfo);


        divInfo.appendChild(new Typography({
            variant: 'h4',
            children: this.movie.titleText?.text,
        }).render());

        divInfo.appendChild(new Typography({
            variant: 'h6',
            children: this.movie.releaseYear?.year,
        }).render());

        return this.movieItemContainer;
    }
}

export default MovieItem;