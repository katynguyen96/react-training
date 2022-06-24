import React, { useState } from 'react';
//use
//component name must be uppercase
//must be in the function/component body
//cannot call conditionally
const UseStateBasics = () => {
  // console.log(useState('hello'))
  const [text, setText] = useState('random title')
  const changeTitle = () => {
    if(text === 'random title') {
      setText('hello')
    }
    else {
      setText('random title')
    }
  }
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className='btn' onClick={changeTitle}>Change title</button>
    </React.Fragment>
  )
};

export default UseStateBasics;
