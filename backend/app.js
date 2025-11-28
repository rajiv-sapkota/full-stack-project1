const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

//importing database connection
const db = require("./database/connection.js");

app.post("/books", async (req, res) => {
  //logic to add a new book
  const { bookName, bookPrice, bookAuthor, bookGenre } = req.body
  
    if (!bookName) {
      return res
        .status(400)
        .json({ message: "please provide book name" });
    } 
  
  if (!bookPrice) {
      return res.status(400).json({ message: "book price is required" });
    }
  
 

  await db.books.create({
    bookName,
    bookPrice,
    bookAuthor,
    bookGenre
  })

  res.status(201).json({
    createdBook: req.body,
    message:"Book added successfully"
  }).catch((err) => {
    console.log("error while adding book:",err)
    res.status(500).json({message:"internal server error",err})
  })
});

app.get('/books', async (req, res) => {
  //logic to get all books
  const booksList = await db.books.findAll()
  res.json(booksList)
  
})

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
