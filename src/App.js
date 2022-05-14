import lens from "./lens.jpg"
import './App.css';
import Dictionary from "./Dictionary"

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={lens} alt='lens' className='App-lens img-fluid'/>
        <span className="title">
        <h2> MY DICTIONARY</h2>
        </span>
      </header>
      <main>
        <Dictionary/>
      </main>
      <footer>Coded by Eunice Kimani <a href="https://github.com/Yunis-wanji/react-dictionary">open-sourced</a>on Github and Hosted on Netlify</footer>
      </div>
    </div>
  );
}

export default App;
