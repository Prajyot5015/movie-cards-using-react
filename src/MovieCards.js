import './MovieCards.css';

const MovieCard = ({title, rating, releaseDate, director, url}) => {
    return (
        <div className='movie-card'>
            <img src={url} alt="poster" className='poster-img' />
            <div className='movie-details'>
                <div className='same-content heading'>
                    <h3> {title} </h3>
                    <p> <span className='rating'> {rating} </span>/10</p>
                </div>
                <div className='same-content sub-heading'>
                    <p>Release Date</p>
                    <p>Director</p>
                </div>
                <div className='same-content time'>
                    <p> {releaseDate} </p>
                    <p> {director} </p>
                </div>
            </div>
        </div>
    )
}
export default MovieCard;