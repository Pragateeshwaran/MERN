import { useState, useEffect } from 'react';

const books = [
  {
    id: 1,
    title: 'The Way of Kings',
    author: 'Brandon Sanderson',
    year: 2010,
    publisher: 'Tor Books',
    image: 'https://m.media-amazon.com/images/I/817AR-bO1SL._UF1000,1000_QL80_.jpg',
  },
  {
    id: 2,
    title: 'A Game of Thrones',
    author: 'George R. R. Martin',
    year: 1996,
    publisher: 'Bantam Books',
    image: 'https://m.media-amazon.com/images/I/71P+4DslKmL._AC_UF1000,1000_QL80_.jpg',
  },
  {
    id: 3,
    title: 'The Name of the Wind',
    author: 'Patrick Rothfuss',
    year: 2007,
    publisher: 'DAW Books',
    image: 'https://m.media-amazon.com/images/I/611iKJa7a-L.jpg',
  },
  {
    id: 4,
    title: 'Mistborn: The Final Empire',
    author: 'Brandon Sanderson',
    year: 2006,
    publisher: 'Tor Books',
    image: 'https://m.media-amazon.com/images/I/811qBmIYTFL.jpg',
  },
  {
    id: 5,
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    year: 1937,
    publisher: 'George Allen & Unwin',
    image: 'https://rukminim3.flixcart.com/image/850/1000/l5jxt3k0/book/h/r/4/the-hobbit-graphic-novel-original-imagg6spfkm5jwwf.jpeg?q=90&crop=false',
  },
  {
    id: 6,
    title: 'Eragon',
    author: 'Christopher Paolini',
    year: 2002,
    publisher: 'Knopf Books',
    image: 'https://m.media-amazon.com/images/I/8106HoRcIsL._AC_UF1000,1000_QL80_.jpg',
  }
];

function App() {
  const [year, setYear] = useState('');
  const [publisher, setPublisher] = useState('All');

  // Generate unique publishers with "All" as default
  let publishers = ['All'];
  const publisherSet = new Set();
  for (let book of books) {
    if (!publisherSet.has(book.publisher)) {
      publisherSet.add(book.publisher);
      publishers.push(book.publisher);
    }
  }

  // Filter books using if-else style
  let filtered = [];
  for (let book of books) {
    let yearMatch = true;
    let pubMatch = true;

    if (year !== '') {
      if (book.year !== parseInt(year)) {
        yearMatch = false;
      }
    }

    if (publisher !== 'All') {
      if (book.publisher !== publisher) {
        pubMatch = false;
      }
    }

    if (yearMatch && pubMatch) {
      filtered.push(book);
    }
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>E-Book Shop 📚</h1>

      {/* Filters */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="number"
          placeholder="Filter by Year (e.g., 2010)"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          style={{ marginRight: '10px', padding: '5px' }}
        />
        <select
          value={publisher}
          onChange={(e) => setPublisher(e.target.value)}
          style={{ padding: '5px' }}
        >
          {publishers.map((pub, index) => (
            <option key={index} value={pub}>{pub}</option>
          ))}
        </select>
      </div>

      {/* Book List */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {filtered.length > 0 ? (
          filtered.map((book) => (
            <div key={book.id} style={{ border: '1px solid #ccc', padding: '10px', width: '200px' }}>
              <img src={book.image} alt={book.title} style={{ width: '100%' }} />
              <h3>{book.title}</h3>
              <p><strong>Author:</strong> {book.author}</p>
              <p><strong>Year:</strong> {book.year}</p>
              <p><strong>Publisher:</strong> {book.publisher}</p>
            </div>
          ))
        ) : (
          <p>No books found matching the filters.</p>
        )}
      </div>
    </div>
  );
}

export default App;
