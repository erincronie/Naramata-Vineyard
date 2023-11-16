import { BrowserRouter, Routes } from 'react-router-dom';
import '../src/styles/_global.scss';
import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
   
    </Routes>
    <Footer/>
  </BrowserRouter>
  );
}

export default App;
