import './App.css'
import MovieCard from './components/MovieCard';
function App() {
  return (
    // Component composition
    <>
    <MovieCard
       title="Inception"
       genre="Sci-Fi"
       rating={4.8}
       duration="2h 28m"
       poster="https://picsum.photos/200/300?1"
    />
    <MovieCard
       title="Avatar"
       genre="Sci-Fi"
       rating={4.1}
       duration="3h 28m"
       poster="https://picsum.photos/200/300?2"
    />
    <MovieCard
       title="FightClub"
       genre="Sci-Fi"
       rating={4.9}
       duration="2h 28m"
       poster="https://picsum.photos/200/300?3"
    />
    </>
  );
}

export default App