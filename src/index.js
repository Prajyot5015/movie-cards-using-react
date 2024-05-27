import ReactDOM from "react-dom/client"
import MovieCard from "./MovieCards";
import './style.css'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <>
        <div className="movie-cards-container">
            <MovieCard
                title="Salaar"
                rating="6.5"
                releaseDate="2023-12-22"
                director="Prashanth Neel"
                url="https://1847884116.rsc.cdn77.org/tamil/home/salaar_1.jpg"
            />
            <MovieCard
                title="Pushpa"
                rating="7.6"
                releaseDate="2021-12-17"
                director="Sukumar"
                url="https://stat2.bollywoodhungama.in/wp-content/uploads/2021/07/Pushpa-4.jpg"
            />
            <MovieCard
                title="K.G.F 2"
                rating="8.3"
                releaseDate="2022-04-13"
                director="Prashanth Neel"
                url="https://images.fandango.com/ImageRenderer/820/0/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/227428/kgfchapter2-posterart.jpg"
            />
        </div>
    </>
)