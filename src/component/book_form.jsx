import { useState } from "react";

function BookForm({ onAddBook }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author || !genre) return alert("Please fill all fields!");
    onAddBook({ title, author, genre });
    setTitle("");
    setAuthor("");
    setGenre("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-2 w-full">
      <input
        type="text"
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="text"
        placeholder="Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        className="border p-2 rounded"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
      >
        Add Book
      </button>
    </form>
  );
}

export default BookForm;