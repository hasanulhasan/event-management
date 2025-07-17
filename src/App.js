import About from './pages/About';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;