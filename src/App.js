import logo from './logo.svg';
import './App.css';
import Ranking from './components/ranking/index.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Ranking />
        <div style={{marginTop: 15}}>
          <button>Atualizar</button>
        </div>
      </header>
    </div>
  );
}

export default App;
