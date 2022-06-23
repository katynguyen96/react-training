import React from 'react'

const Book = (props)=>{
	const {img, title, author} = props
	const clickHandler = () => {
		console.log(title)
	}

	const complexExample = (author) => {
		console.log(author)
	}
	return (
		<article className="book" style={{textAlign:'center'}}>
			<img 
			src={img}
			alt=""
			/> 
			<h1 onClick={()=>{console.log("title")}}>{title}</h1>
			<h3>{author}</h3>
			<button type="button" onClick={clickHandler}>Example</button>
			<button type="butotn" onClick={() => complexExample(author)}>complex</button>
		</article>
	)
}

export default Book