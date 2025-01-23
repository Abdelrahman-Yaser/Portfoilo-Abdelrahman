import { Routes, Route } from "react-router-dom";
import { Contact } from "./pages/Contact";
import { Hero } from "./pages/Hero";
import { Skills } from "./pages/Skills";
import { Projects } from "./pages/Projects";
import Post from "./pages/Post";

function App() {
  return (
    <Routes>
      <Route path="/hero" element={<Hero />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/post" element={<Post />} />
    </Routes>
  );
}

export default App;
