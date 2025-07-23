import About from "./pages/About";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Contact from "./pages/Contact";
import GroupTrips from "./pages/GroupTrips";
import DestinationExplorer from "./pages/Destinations";
import TermsConditions from "./pages/TermsConditions";
import Dashboard from "./pages/Dashboard";
import BlogTravelTips from "./pages/BlogTravelTips";
import HelpSupport from "./pages/HelpSupport";
import PrivateRoute from "./auth/PrivateRoute";
import Layout from "./Layout";
import BlogDetails from "./pages/BlogDetails";
import TourCategories from "./pages/TourCategories";
import ExploreCategory from "./pages/ExploreCategory";
import EventDetails from "./pages/EventDetails";
import HostEvent from "./pages/HostEvent";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/TermsConditions" element={<TermsConditions />} />
        <Route path="/GroupTrips" element={<GroupTrips />} />
        <Route path="/exploreEvents" element={<ExploreCategory />} />
        <Route path="/destinations" element={<DestinationExplorer />} />
        <Route path="/eventDetails" element={<EventDetails />} />
        <Route path="/BlogTravelTips" element={<BlogTravelTips />} />
        <Route path="/blogDetails" element={<BlogDetails />} />
        <Route path="/support" element={<HelpSupport />} />
        <Route path="/TourCategories" element={<TourCategories />} />
        <Route path="/HostEvent" element={<HostEvent />} />        

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
