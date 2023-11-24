import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../src/styles/partials/_global.scss';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Gallery from './pages/Gallery/Gallery';
import Button from './components/BackToTopButton/BackToTopButton';
import Hosts from './pages/MeetTheHosts/MeetTheHosts';
import BookNow from './pages/BookNow/BookNow';
import ContactUs from './pages/ContactUs/ContactUs';



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/hosts" element={<Hosts />} />
        <Route path="/booknow" element={<BookNow />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
      <Button />
      <Footer />
    </BrowserRouter>
  );
}

export default App;