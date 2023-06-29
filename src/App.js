import './App.css';
import Header from './components/Header';
import Ourteam from './components/pages/Ourteam';
import Footer from './components/Footer';
import Contact from './components/pages/Contact';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Signin from './components/Signin';


function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/team' element={<Ourteam />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/signin' element={<Signin />}></Route>
        </Routes>
      <Footer />
    </>
  );
}

export default App;
