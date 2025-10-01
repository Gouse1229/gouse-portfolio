import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Footer from './components/Footer';
import './App.css';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import NewChatbot from './components/NewChatbot'

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow overflow-y-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills/>}/>
        </Routes>
      </main>
      <Footer />
      <NewChatbot/>
    </div>
  );
}

export default App;
