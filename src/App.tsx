import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import PokemonList from './pages/PokemonList';
import PokemonDetail from './pages/PokemonDetail';
import MyPokemonList from './pages/MyPokemonList';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/my-pokemon-list" element={<MyPokemonList />} />
        <Route path="/:id" element={<PokemonDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
