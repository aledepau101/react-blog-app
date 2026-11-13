import { Routes, Route } from 'react-router';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import BlogPostsPage from './pages/BlogPostsPage';
import IndividualPostPage from './pages/IndividualPostPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div className="page">
      <Header />
      <main className="card">
        <Routes>
          <Route path="/" element={<BlogPostsPage />} />
          <Route path="/posts/:id" element={<IndividualPostPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;