import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Gallery from './pages/Gallery.tsx';
import GalleryDetail from './pages/GalleryDetail.tsx';
import Docs from './pages/Docs.tsx';
import Navbar from './components/Navbar'; 

function App() {
  return (
    <Router>
      <Navbar /> {/* page link */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/:id" element={<GalleryDetail />} />
        <Route path="/docs" element={<Docs />} />
      </Routes>
    </Router>
  );
}

export default App;
