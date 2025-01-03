import express from "express";
// import mysql from "mysql";
import mysql from "mysql2";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// const db = mysql.createConnection({
//   // host: "localhost",
//   host: "127.0.0.1",
//   user: "root",
//   password: "root",
//   database: "book_schema",
// });

const db =  mysql.createPool({
  host: "mysql",
  user: "root",
  password: "root",
  database: "book_schema",
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});


app.get("/", (req, res) => {
  res.json("hello");
});

app.get("/movies", (req, res) => {
  const q = "SELECT * FROM movies";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.post("/movies", (req, res) => {
  console.log("Received movie creation request:", req.body); 
  const q = "INSERT INTO movies(`title`, `description`, `price`, `cover`) VALUES (?)";
  
  console.log("Generated SQL query:", q); // Log the generated SQL query
  
 
  const values = [
    req.body.title,
    req.body.desc,
    req.body.price,
    req.body.cover,
  ];

  console.log("Prepared values:", values); // Log the values being inserted

  // Use 'values' correctly
  db.query(q, [values], (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json(err);
    }
    return res.status(200).json("Movie has been added.");
  });
});

app.delete("/movies/:id", (req, res) => {
  const bookId = req.params.id;
  const q = " DELETE FROM movies WHERE id = ? ";

  db.query(q, [bookId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.put("/movies/:id", (req, res) => {
  const bookId = req.params.id;
  const q = "UPDATE movies SET `title`= ?, `description`= ?, `price`= ?, `cover`= ? WHERE id = ?";

  const values = [
    req.body.title,
    req.body.desc,
    req.body.price,
    req.body.cover,
  ];

  db.query(q, [...values,bookId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.listen(8800, () => {
  console.log("Connected to backend.");
});
