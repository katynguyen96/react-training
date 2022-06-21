import React from 'react'
import ReactDom from 'react-dom'
//CSS
import './index.css'
const firstBook = {
 	title: 'It not summer without you',
	author: 'Jenny Han',
	img: "https://images-na.ssl-images-amazon.com/images/I/51ky4TIb1bL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
}

const secondBook = {
 	title: 'Where the crawdads sing',
	author: 'Delia Owens',
	img: "https://images-na.ssl-images-amazon.com/images/I/61m1Vxw8tiL._AC_UL302_SR302,200_.jpg"
}	

function BookList(){
	return (
		<section className="booklist">
			<Book title={firstBook.title} author={firstBook.author} img={firstBook.img}/>
			<Book title={secondBook.title} author={secondBook.author} img={secondBook.img}/>
		</section>
	)
}

const Book = (props)=>{
	return (
		<article className="book" style={{textAlign:'center'}}>
			<img 
			src={props.img}
			alt=""
			/> 
			<h1>{props.title}</h1>
			<h3>{props.author}</h3>
		</article>
	)
}

ReactDom.render(<BookList/>, document.getElementById('root'))
