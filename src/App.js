import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import Home from './components/Home'
import About  from './components/About';
import Contact from './components/Contact'
import Navbar from './components/Navbar';
import Success from './components/success/success';
import NotFound from './components/NotFound';
function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <Navbar/>
      <Routes>
      <Route path='/' Component={Home} />
      <Route path='/about' Component={About} />
      <Route path='/contact' Component={Contact} />
      <Route path='/success' Component={Success} />
      <Route path='*' Component={NotFound}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;