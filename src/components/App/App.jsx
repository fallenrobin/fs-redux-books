import BookList from '../BookList/BookList';
import BookForm from '../BookForm/BookForm';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import './App.css';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    fetchBooks();
  },[]);

  // TODO - GET Book List from server
  const fetchBooks = () => {
    axios.get('/books')
      .then(response => {
        // last week: setState with response.data
        dispatch({ type: 'SET_BOOK_LIST', payload: response.data })
      })
    //catch
  }


  return (
    <div className="App">
      <header><h1>Books w/ Redux!</h1></header>
      <main>
        <BookForm 
        fetchBooks={fetchBooks}/>
        <BookList />
      </main>
    </div>
  );
}

export default App;