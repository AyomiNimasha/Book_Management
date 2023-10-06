import axios from "axios";
import "./formStyles.css";
import "./tableStyles.css";

import { AiFillDelete } from "react-icons/ai";
import { useEffect, useState } from "react";

export function Home() {
  const dataBaseUrl="http://localhost:3000/books";
  const[data,setData]=useState([])
  const[bookTitle,setBookTitle]=useState("")
  const[bookAuthor,setBookAuthor]=useState("")
  const[isbn,setIsbn]=useState()
  
  useEffect(() => {
    async function getBooks() {
      try {
        const response = await axios.get(`${dataBaseUrl}`);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  
    getBooks(); 
  }, []); 

  const submit=(e)=>{
    e.preventDefault();
    axios.post(`${dataBaseUrl}`,{title:bookTitle,author:bookAuthor,isbn:isbn});
    window.location.reload();
  }
  const deleteBook=(isbn)=>{
    axios.delete(`${dataBaseUrl}/${isbn}`)
    window.location.reload();
  }

  return (
    <div className="main-container">
      <form className="form-container" onSubmit={submit} >
        <h2 className="main-title">Add New Book</h2>
        <div className="sub-container">
          <span className="label">Book Title</span>
          <input
            
            className="text-input"
            placeholder="Book title"
            onChange={(e)=>setBookTitle(e.target.value)}
          />
        </div>
        <div className="sub-container">
          <span className="label">Book Author</span>
          <input
            
            className="text-input"
            placeholder="Book title"
            onChange={(e)=>setBookAuthor(e.target.value)}
          />
        </div>
        <div className="sub-container">
          <span className="label">ISBN Number</span>
          <input
            
            className="text-input"
            placeholder="Book title"
            type="number"
            onChange={(e)=>setIsbn(e.target.value)}
          />
        </div>
        <div className="sub-container">
          <button type="submit" className="submit-button">
            Add Book
          </button>
        </div>
      </form>
      <div className="table-container">
        <div className="table-topic">
          <h3>Book List</h3>
        </div>

        <table>
          <tr className="table-head-row">
            <th className="table-head">BOOK TITLE</th>
            <th className="table-head">BOOK AUTHOR</th>
            <th className="table-head">ISBN NUMBER</th>
            <th className="table-head">ACTION</th>
          </tr>
          {data.map(book => (
            <tr key={book.isbn}>
              <td className="table-data">{book.title}</td>
              <td className="table-data">{book.author}</td>
              <td className="table-data">{book.isbn}</td>
              <td className="table-data-icon">
                <AiFillDelete onClick={()=>deleteBook(book.isbn)}/>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}