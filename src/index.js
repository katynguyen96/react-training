import React from 'react'
import ReactDom from 'react-dom/client'
//CSS
import './index.css'
import {books} from './books'
import Book from './Book'

function BookList(){
	return (
		<section className="booklist">
			{books.map((book)=>{
				return <Book key={book.id} {...book}/>
			})}
		</section>
	)
}

ReactDom.createRoot(document.getElementById('root')).render(<BookList/>)

