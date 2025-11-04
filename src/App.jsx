import { useState } from "react";
import BookForm from "./component/book_form.jsx";
import "./App.css";
import BookList from "./component/book_list.jsx";

function App() {
  const [books, setBooks] = useState([]);

  const addBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      {/* Center container */}
      <div className="flex flex-col items-center text-center space-y-6 bg-white p-8 rounded-xl shadow-md w-96">
        <h1 className="text-3xl font-bold text-blue-600"> Book Dashboard</h1>
        <BookForm onAddBook={addBook} />
        <BookList books={books} />
      </div>
    </div>
  );
}

export default App;