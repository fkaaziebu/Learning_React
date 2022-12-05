import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { BookList } from "./pages/BookList";
import { Book } from "./pages/Book";
import { BookLayout } from "./pages/BookLayout";
import { NewBook } from "./pages/NewBook";
import { NotFound } from "./pages/NotFound";


function App() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/books">Books</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Nested Routes */}
        <Route path="/books" element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />}/>
          <Route path="/books/new" element={<NewBook />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
