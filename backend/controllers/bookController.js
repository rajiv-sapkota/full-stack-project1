



const db = require("../database/connection.js");


exports.fetchAllBooks = async (req, res) => {
    //logic to get all books
    const bookList = await db.books.findAll()
    res.status(200).json({
        bookList,
        message: "Books fetched successfully"
        
    } )
}




exports.addBook = async (req, res) => {
    const { bookName, bookPrice, bookAuthor, bookGenre,bookDescription } = req.body;

    await db.books.create({
        bookName,
        bookPrice,
        bookAuthor,
        bookGenre,
        bookDescription
    })

    res.status(201).json({
        createdBook: req.body,
        message:"Book added successfully"
    }).catch((err) => {
        res.status(500).json({message:"internal server error",err})
    })
}


exports.getBookById = async (req, res) => {
    const { id } = req.params
    const book = await db.books.findByPk(id)
    if (!book) {
        return res.status(404).json({
            message:"Book not found"
        })
    }
    res.status(200).json({
        book,
        message:"Book fetched succcessfully"
    })
        
}


exports.updateBook = async (req, res) => {
    const { id } = req.params
    const { bookName, bookPrice, bookAuthor, bookGenre } = req.body
    
    const book= await db.books.findByPk(id)

    if (!book) {
        return res.status(400).json({
            message:"Book not found"
        })
    } else {
        await db.books.update({
        bookName,
        bookPrice,
        bookAuthor,
        bookGenre
    }, {
        where: {
            id:id
        }
    })
    
    res.status(200).json({
        upadatedBook:req.body,
        "message":"Book updated Successfully"
        })}
    
}


exports.deleteBook = async (req, res) => {
    const { id } = req.params
    const book = await db.books.findByPk(id)
    
    if (!book) {
        return res.status(404).json({
            message:"Book Not Foun....Cannot delete"
        })
    } else {
        await db.books.destroy({
            where:{
                id
            }
        })
    }
    res.status(200).json({
        message:"Book deleted Successfully"
    })
    
}

//not working as expected
exports.getBookByName = async (req, res) => {
    try {
      const { bookName } = req.body;
      const book = await db.books.findOne({
        where: {
          
             bookName
                
        }
      });
    
        if (!book) {
        return res.status(404).json({
          message: `The book ${bookName} is not found`,
        });
      } else {
        return res.status(200).json({
          book,
          message: "Book fetched successfully",
        });
      }
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error",
        err:err.message
      });
    }
        
} 
        


