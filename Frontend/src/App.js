import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App relative h-screen flex flex-col">
    <Navbar />
    <div className="flex-grow flex justify-center items-center">
      <Home />
    </div>
  </div>
  );
}

export default App;
