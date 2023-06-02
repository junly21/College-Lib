import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PostListPage from './pages/PostListPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';
import SearchListPage from './pages/SearchListPage';
import BookInfoPage from './pages/BookInfoPage';
import BoardPage from './pages/BoardPage';
import TestPage from './pages/TestPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/write" element={<WritePage />} />

      <Route path="/search">
        <Route path=":keyword" element={<SearchListPage />} />
      </Route>

      <Route path="test" element={<TestPage />} />

      <Route path="/info">
        <Route path=":bookId" element={<BookInfoPage />}></Route>
      </Route>

      <Route path="/board">
        <Route path=":bookId" element={<BoardPage />} />
      </Route>

      <Route path=":bookId" element>
        <Route path=":postId" element={<PostPage />} />
      </Route>

      <Route path="/:bookId/:tags" element={<PostListPage />} />
    </Routes>
  );
};
export default App;
