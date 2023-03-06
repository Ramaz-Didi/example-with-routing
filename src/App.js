import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projets from './components/pages/projects';
import Contact from './components/pages/Contact';

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        {/* Wrap Route elements in a Routes component */}
        <Routes basename="example-with-routing">
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/example-with-routing/" element={<Home />} />
          <Route path="/example-with-routing/about" element={<About />} />
          <Route path="/example-with-routing/projects" element={<Projets />} />
          {/* Define a route that will have descendant routes */}
          <Route path="/example-with-routing/contact/*" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

