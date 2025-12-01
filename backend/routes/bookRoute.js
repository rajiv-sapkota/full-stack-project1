const { fetchAllBooks, addBook, updateBook, deleteBook, getBookById, getBookByName } = require("../controllers/bookController")

const router = require("express").Router()


router.route('/books').get(fetchAllBooks).post(addBook)
router.route('/books/:id').patch(updateBook).delete(deleteBook).get(getBookById)
//router.route('/books/:bookName').get(getBookByName)



module.exports=router