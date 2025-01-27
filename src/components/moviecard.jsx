import '../styles/movie.css'

export default function MovieCard(props) { 
    return (
        <div className="movie-card">
            <img src={props.poster} alt={props.title} />
            <h3>{props.title}</h3>
            <p>{props.year}</p>
            <p>{props.genre}</p>
        </div>
    )
}
