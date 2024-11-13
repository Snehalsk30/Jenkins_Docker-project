const http = require('http');
 
const books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
  { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
  { id: 4, title: 'Moby Dick', author: 'Herman Melville', year: 1851 },
  { id: 5, title: 'War and Peace', author: 'Leo Tolstoy', year: 1869 }
];
 
const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    let bookList = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Library Books</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f0f8ff;
            margin: 0;
            padding: 20px;
          }
          h1 {
            text-align: center;
            color: #333;
          }
          ul {
            list-style-type: none;
            padding: 0;
          }
          li {
            background-color: #ffffff;
            margin: 10px 0;
            padding: 15px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          }
          strong {
            color: #2c3e50;
          }
        </style>
      </head>
      <body>
        <h1>Books in the Library</h1>
        <ul>
          ${books.map(book => `<li><strong>${book.title}</strong> by ${book.author} (Published: ${book.year})</li>`).join('')}
        </ul>
      </body>
      </html>
    `;
    res.end(bookList);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
 