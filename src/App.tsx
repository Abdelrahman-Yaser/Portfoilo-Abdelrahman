import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './components/pages/Home';
import Post from './components/pages/Post';

function App() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Post />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
