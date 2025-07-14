const http = require('http');
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'myuser',
  password: 'Amalmusa@01',
  database: 'myapp'
});

// Connect to MySQL
db.connect(err => {
  if (err) {
    console.error('❌ MySQL connection failed:', err);
    process.exit(1);
  }
  console.log('✅ Connected to MySQL');
});

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });

  db.query('SELECT NOW() AS time', (err, results) => {
    if (err) {
      res.end('Database error');
      return;
    }

    res.end(`🚀 Hello! DB time: ${results[0].time}`);
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

