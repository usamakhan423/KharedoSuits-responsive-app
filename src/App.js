import React from 'react';
import Header from './components/Header'
import BlogPostList from './components/BlogPosts';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <main>
        <BlogPostList />
      </main>
      <Footer />
    </div>
  );
}

export default App;

