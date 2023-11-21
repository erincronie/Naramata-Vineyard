import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../src/styles/partials/_global.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Gallery from './pages/Gallery/Gallery';
import Button from './components/BackToTopButton/BackToTopButton';



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Button />
      <Footer />
    </BrowserRouter>
  );
}

export default App;