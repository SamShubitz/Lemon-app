import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Routing from './components/Routing';

function App() {
  return (
    <div className="app">
      <Header/>
      <Routing />
      <Footer/>
    </div>
  );
}

export default App;
