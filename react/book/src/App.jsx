import { useState } from 'react';

const books = [
  { id: 1, title: 'The Way of Kings', author: 'Brandon Sanderson', year: 2010, publisher: 'Tor Books', image: 'https://m.media-amazon.com/images/I/817AR-bO1SL._UF1000,1000_QL80_.jpg' },
  { id: 2, title: 'A Game of Thrones', author: 'George R. R. Martin', year: 1996, publisher: 'Bantam Books', image: 'https://m.media-amazon.com/images/I/71P+4DslKmL._AC_UF1000,1000_QL80_.jpg' },
  { id: 3, title: 'The Name of the Wind', author: 'Patrick Rothfuss', year: 2007, publisher: 'DAW Books', image: 'https://m.media-amazon.com/images/I/611iKJa7a-L.jpg' },
  { id: 4, title: 'Mistborn: The Final Empire', author: 'Brandon Sanderson', year: 2006, publisher: 'Tor Books', image: 'https://m.media-amazon.com/images/I/811qBmIYTFL.jpg' },
  { id: 5, title: 'The Hobbit', author: 'J.R.R. Tolkien', year: 1937, publisher: 'George Allen & Unwin', image: 'https://rukminim3.flixcart.com/image/850/1000/l5jxt3k0/book/h/r/4/the-hobbit-graphic-novel-original-imagg6spfkm5jwwf.jpeg?q=90&crop=false' },
  { id: 6, title: 'Eragon', author: 'Christopher Paolini', year: 2002, publisher: 'Knopf Books', image: 'https://m.media-amazon.com/images/I/8106HoRcIsL._AC_UF1000,1000_QL80_.jpg' }
];

export default function App() {
  const [year, setYear] = useState('');
  const [publisher, setPublisher] = useState('All');

  // Get unique publishers every render
  const publishers = ['All', ... (books.map(book => book.publisher))];

  // Filter books based on year and publisher
  const filteredBooks = books.filter(book => {
    const matchesYear = year === '' || book.year === parseInt(year);
    const matchesPublisher = publisher === 'All' || book.publisher === publisher;
    return matchesYear && matchesPublisher;
  });

  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <h1>E-Book Shop 📚</h1>

      {/* Filters */}
      <div style={{ marginBottom: 20 }}>
        <input
          type="number"
          placeholder="Filter by Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          style={{ marginRight: 10, padding: 5 }}
        />
        <select
          value={publisher}
          onChange={(e) => setPublisher(e.target.value)}
          style={{ padding: 5 }}
        >
          {publishers.map(pub => (
            <option key={pub} value={pub}>{pub}</option>
          ))}
        </select>
      </div>

      {/* Books */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
        {filteredBooks.length > 0 ? (
          filteredBooks.map(book => (
            <div key={book.id} style={{
              border: '1px solid #ccc',
              borderRadius: 8,
              padding: 10,
              width: 200,
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
            }}>
              <img src={book.image} alt={book.title} style={{ width: '100%', borderRadius: 4 }} />
              <h3 style={{ margin: '10px 0 5px' }}>{book.title}</h3>
              <p style={{ margin: 0 }}><strong>Author:</strong> {book.author}</p>
              <p style={{ margin: 0 }}><strong>Year:</strong> {book.year}</p>
              <p style={{ margin: 0 }}><strong>Publisher:</strong> {book.publisher}</p>
            </div>
          ))
        ) : (
          <p>No books found matching the filters.</p>
        )}
      </div>
    </div>
  );
}
