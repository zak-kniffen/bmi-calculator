import logo from './logo.svg';
import './App.css';
import InputForm from './components/InputForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>BMI Calculator</h1>
        <InputForm />
        <p>
          software by Zak Kniffen
        </p>
        <div className="footer">
          <a
            className="App-link"
            href="https://github.com/zak-kniffen"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
          <a
            className="App-link"
            href="https://www.linkedin.com/in/zak-kniffen-mba-5677ab54/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedIn
          </a>

        </div>

      </header>
      
    </div>
  );
}

export default App;
