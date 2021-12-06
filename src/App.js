// import background from './flat-mountains.svg';
import './App.css';
import './index.css';
import {MenuButtonWideFill} from 'react-bootstrap-icons';

function App() {
  return (
    <div className="App">
      <AppHeader name="momentary" />
      <Main />
      <Footer name="Momentary" year={new Date().getFullYear()} />
    </div>
  );
}

function AppHeader(props) {
  return (
    <header className="App-header">
      <div className="app-logo">
        {props.name}
      </div>
      <div className="app-settings-icon">
        <MenuButtonWideFill />
      </div>
    </header>
  );
}

function Main() {
  return (
    <section className="App-main" id="main">
      <div className="search-bar">
        <input type="text" placeholder="How are you feeling?" />
      </div>
    </section>
  );
}

function Footer(props) {
  return (
    <footer className="App-footer">
      <small>&copy;{props.name}. {props.year}</small>
    </footer>
  );
}

export default App;
