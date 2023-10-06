import { Axios } from "axios";
import {useState} from 'react';
export const BookForm = () => {
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    isbn: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookData({ ...bookData, [name]: value });
  };

  const addBook = (e) => {
    e.preventDefault();
    // Send a POST request to the backend with bookData
    // Axios.post('/books', bookData)
    //   .then(function (response) {
    //     console.log(response.data);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

}
    
  return (
    <div>
    <h2>Add Book</h2>
    <form onSubmit={addBook}>
      <div>
        <div>Title:</div>
        <input
          type="text"
          name="title"
          value={bookData.title}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <div>Author:</div>
        <input
          type="text"
          name="author"
          value={bookData.author}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <div>ISBN:</div>
        <input
          type="text"
          name="isbn"
          value={bookData.isbn}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <button type='submit'>Add Book</button>
      </div>
    </form>
  </div>
  )
}
