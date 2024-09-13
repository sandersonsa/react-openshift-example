import logo from './logo.svg';
import './App.css';

function App() {
  const {DEVELOPER} = process.env;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello from React on OpenShift!</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{DEVELOPER}</p>
      </header>
    </div>
  );
}

export default App;
