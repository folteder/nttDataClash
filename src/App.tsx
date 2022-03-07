import SearchInput from './components/SearchInput';
import TitleLabel from './components/TitleLabel';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TitleLabel/>
      </header>
      <section>
        <SearchInput/>
      </section>
    </div>
  );
}

export default App;
