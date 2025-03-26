import './App.css';
import Card from './components/Card';
import Search from './components/SearchInput.jsx'
import useGitHubSearch from './hook/useFetchApi.js';

function App() {
  const { handleSearch } = useGitHubSearch();

  return (
    <div className="App">
      <h1>Buscar usuario en GitHub</h1>
      <Search onSearch={handleSearch}/>
      <Card />
    </div>
  );
}

export default App;