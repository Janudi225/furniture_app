import './App.css';
import { Herosection } from './components/Herosection';
import { Navbar } from './components/Navbar';
import {Menu} from './components/Menu';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Herosection/>
      <Menu/>
    </div>
  );
}

export default App;
