import './App.css';
import Navbar from './components/Navbar'
import AllInOne from './components/AllInOne'
import Cards from './components/Cards'
import Details from './components/Details'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllInOne/>
      <Cards/>
      <Details/>
    </div>
  );
}

export default App;
