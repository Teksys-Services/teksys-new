import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SiteLayout from "./routes/SiteLayout";
import Home from "./routes/_site/index";
import About from "./routes/_site/about";
import Contact from "./routes/_site/contact";
import Services from "./routes/_site/services";
import Legal from "./routes/_site/legal";
import Training from "./routes/_site/training";
import NotFound from "./routes/NotFound";
import { reportLovableError } from "./lib/lovable-error-reporting";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SiteLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<Services />} />
          <Route path="legal" element={<Legal />} />
          <Route path="training" element={<Training />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
