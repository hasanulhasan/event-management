import About from './pages/About';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Contact from './pages/Contact';
import GroupTrips from './pages/GroupTrips';
import DestinationExplorer from './pages/Destinations';
import TermsConditions from './pages/TermsConditions';
import BlogTravelTips from './pages/BlogTravelTips';
import HelpSupport from './pages/HelpSupport';

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/TermsConditions" element={<TermsConditions />} />
      <Route path="/GroupTrips" element={<GroupTrips />} />
      <Route path="/Destinations" element={<DestinationExplorer />} />
      <Route path="/BlogTravelTips" element={<BlogTravelTips />} />
      <Route path="/HelpSupport" element={<HelpSupport />} />

      
      
    </Routes>
  );
}

export default App;