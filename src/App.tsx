import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Gallery from './pages/Gallery.tsx';
import DocsMD from './pages/DocsMD.tsx';
import Navbar from './components/Navbar';
import Footer from './components/Footer.tsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/Docs' element={<DocsMD />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
