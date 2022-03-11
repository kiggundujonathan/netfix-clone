import './App.css';
import Banner from './Banner';
import requests from './requests';
import Row from './Row';
import Nav from './Nav'
function App() {
  return (
    <div className="App">
    <Nav/>
    <Banner/>
      <header className="App-header">
      <Row title = "IVO'S FAVOURITES " fetchUrl = {requests.fetchNetflixOriginals}
        isLargeRow = {true}
      />
      <Row title= "Trending Now" fetchUrl = {requests.fetchTrending} />
      <Row title= "Top Rated" fetchUrl = {requests.fetchTopRated} />
      <Row title= "Action Movies" fetchUrl = {requests.fetchActionMovies} />
      <Row title= "Comedy Movies" fetchUrl = {requests.fetchComedyMovies} />
      <Row title= "Horror Movies" fetchUrl = {requests.fetchHorrorMovies} />
      <Row title= "Romance Movies" fetchUrl = {requests.fetchRomanceMovies} />
      <Row title= "Documentaries" fetchUrl = {requests.fetchDocumantaries} />
     
      </header>
    </div>
  );
}

export default App;
