
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
 
import './App.css';
import CounterPage from './components/CounterPage';

function App() {
  return (
    <div className="App">
      <CounterPage />
    </div>
  );
}

export default App;
