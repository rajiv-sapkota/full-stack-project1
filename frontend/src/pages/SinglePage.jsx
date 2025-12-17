import { useEffect, useState } from "react";
import Navbar from "../../components/NavBar";
import SingleBook from "../../components/SingleBook";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../../components/Button";

function SinglePage() {

  const navigate=useNavigate()

  const {id}=useParams()

  const [singleBook, setSingleBook] = useState({})

  const fetchSingleBook = async () => {
    const response = await axios.get("http://localhost:3000/api/books/"+id)
    setSingleBook(response.data.book)
  }
  
 
  useEffect(() => {
    fetchSingleBook()
  }, [])
  
   
 const deleteBook = async () => {
   await axios.delete("http://localhost:3000/api/books/" + id)
   window.alert("book deleted")
   navigate("/")
  };

  const editBook = async () => {
    console.log("in edit book")
    await axios.patch("http://localhost:3000/api/books/" + id)
    navigate("/")
  }
  
  
	
	return (
    <>
      <Navbar />
      <SingleBook singleBook={singleBook} />
      <br></br>

     <Button buttonName="Delete" onClick={deleteBook} />
     <Button buttonName="Edit" onClick={editBook} />
     
    </>
  );
}

export default SinglePage;
