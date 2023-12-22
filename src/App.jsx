import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import TvShows from "./components/TvShows";
import Myfooter from "./components/Myfooter";
import Gallery from "./components/Gallery";

function App() {
  return (
    <div className="App">
      <MyNav />
      <TvShows/>
      <Gallery searchValue='Spider-man'/>
      <Gallery searchValue='Hulk'/>
      <Gallery searchValue='Avengers'/>
      <Gallery searchValue='Thor'/>
      <Gallery searchValue='Cicciolina'/>

      <Myfooter/>
    </div>
    
  );
}

export default App;