import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import SinglePost from './components/features/SinglePost/SinglePost';
import AddPost from './components/pages/AddPost';
import EditPost from './components/pages/EditPost';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound/NotFound';
import Header from './components/views/Header';
import Footer from './components/views/Footer/Footer';
import Categories from './components/pages/Categories/Categories';
import SingleCategory from './components/features/SingleCategory';

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/post/:postId" element={<SinglePost />} />
        <Route path="/post/add" element={<AddPost />} />
        <Route path="/post/edit/:postId" element={<EditPost />} />
        <Route path="/categories/:category" element={<SingleCategory />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
