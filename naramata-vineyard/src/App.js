import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../src/styles/_global.scss';
import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';
import Homepage from '../src/Pages/Homepage/Homepage';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route to="/" component={Homepage} />
    </Routes>
    <Footer/>
  </BrowserRouter>
  );
}

export default App;
