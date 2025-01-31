import '../styles/movie.css'

export default function MovieCard(props) { 
    function like() {
        alert('You liked this movie')
    }
    return (
        <div className="movie-card">
            <div className='movie-poster' >
                <img src={props.poster} alt={props.title} />
                <div className='movie-overlay'>
                    <button className='favourite-btn' onClick={like()}> ❤️ </button>
                </div>
            </div>
            <div className='movie-info'>
                <h3 className=''>{props.title}</h3>
                <p>{props.year}</p>
                <p>{props.genre}</p>
            </div>
            
        </div>
    )
}

