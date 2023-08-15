import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './components/theme/theme';
function App() {
  return (
    <div className="App">
      {/* <ThemeProvider theme={theme}> */}
      <Header/>
      {/* </ThemeProvider> */}
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header> */}
    </div>
  );
}

export default App;
