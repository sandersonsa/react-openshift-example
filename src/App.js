import logo from './logo.svg';
import './App.css';

function App() {
  
  const {DEVELOPER, REACT_APP_API_URL} = process.env;
  
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
        <p>Dev: {DEVELOPER}</p>
        <p>Environment: {REACT_APP_API_URL}</p>
      </header>
    </div>
  );
}

export default App;
