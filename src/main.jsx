import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import BookForm from './component/book_form.jsx'
// import BookList from './component/book_list.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <BookForm /> */}
    {/* <BookList /> */}
  </StrictMode>,
)
