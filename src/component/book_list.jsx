function BookList({ books }) {
    return (
    <div className="w-full">
        {books.length === 0 ? (
        <p className="text-gray-500 text-center">No books added yet.</p>
        ) : (
        <ul className="space-y-2">
            {books.map((book, index) => (
            <li
                key={index}
                className="bg-gray-50 border rounded-lg p-3 shadow-sm"
            >
                <h2 className="font-semibold">{book.title}</h2>
                <p className="text-sm text-gray-600">
                {book.author} — <span className="italic">{book.genre}</span>
                </p>
            </li>
            ))}
        </ul>
        )}
    </div>
    );
}
export default BookList;