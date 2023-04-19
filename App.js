import logo from './logo.svg';
import './App.css';
import Header from './COMPONENTS/Header';
import './COMPONENTS/style.css';
import TopTrending from './COMPONENTS/TopTrending';
import Comedy from './COMPONENTS/Comedy';
import NetflixOrigins from './COMPONENTS/NetflixOriginals';
import HorrorMovies from './COMPONENTS/HorrorMovies';

function App() {
  return (
    <div>
      <Header/>
      <TopTrending/>
      <Comedy/>
      <NetflixOrigins/>
      <HorrorMovies/>
    </div>
  );
}

export default App;
