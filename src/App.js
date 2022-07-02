
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
 
import './App.css';
import CounterPage from './components/CounterPage';
import MealList from "./components/MealList";
import PopupModal from "./components/PopupModal";

function App() {
  return (
    <div className="App">
      <CounterPage />
      <PopupModal></PopupModal>
      <MealList></MealList>
    </div>
  );
}

export default App;
