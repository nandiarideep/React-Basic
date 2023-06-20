// import logo from './logo.svg';
import './App.css';
import './components/Navbar'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Signin from './components/Signin';

function App() {
  return (
    <>
      <Navbar />
      <div className=' mx-auto px-10 pb-16 pt-[50px] bg-[#02030fee] overflow-hidden place-items-center gap-5 h-[100%]'>        
        <h1 className='text-white font-medium text-7xl justify-center flex items-center m-36'>
          This is a Basic React Website.
        </h1>
        <p className='text-white font-large text-4xl flex justify-center items-center'>Feel free to check out my other stuff.</p>
        <Footer />     
      </div>
    </>
  );
}

export default App;
