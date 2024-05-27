import ReactDOM from "react-dom/client"
import MovieCard from "./MovieCards";


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
        </div>
    </>
)