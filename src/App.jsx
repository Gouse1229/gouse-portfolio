import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import './App.css';

// Lazy load pages
const Portfolio = lazy(() => import('./pages/Portfolio'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-8 w-8 border-2 border-gray-900 border-t-transparent"></div>
    </div>
  </div>
);

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <main className="flex-grow">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
