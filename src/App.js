
import './App.css';
import { HashRouter, Route, Routes} from 'react-router-dom';
import Home from './Home';
import News from './News';
import About from './About';
import Contact from './Contact';



function App() {
  return (
    <>
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='news' element={<News/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        </Routes>
    </HashRouter>
    </>
  );
}

export default App;
