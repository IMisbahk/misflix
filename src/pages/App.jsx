import "../styles/App.css"
import Navbar from '../components/navbar'
import MovieCard from '../components/moviecard' 

export default function App() {

  return (
    <>
      <Navbar />
      <MovieCard title="The Shawshank Redemption" year="1994" genre="Drama" poster="https://images-na.ssl-images-amazon.com/images/I/51S9gFmJQ-L._AC_.jpg" />
    </>
  )
}


