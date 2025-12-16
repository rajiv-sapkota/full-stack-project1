import axios from "axios";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Navbar from "../../components/NavBar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



function HomePage() {

  

  const [books,setBooks] =useState([])

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3000/api/books/')    
    setBooks(response.data.bookList)
  }

  const deleteBook =async () => {
   console.log("dleted")
  }


 

  useEffect(() => {
    fetchBooks()
   
    
  }, [])
  




  return (
    <>
      <Navbar />

      <Button buttonName="Login" />
      <Button buttonName="Book Now" />
     
      

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {
          books.map((book) => {
            return <Card book={book}/>;
          })
        }
       
       
      </div>
    </>
  );
}

export default HomePage;
