import React from 'react'
import styled from 'styled-components'

function App() {
  const Title = styled.h1`
  	font-size: 1.5em;
  	text-align: center;
  	color: palevioletred
  `;
  const Wrapper = styled.section`
	padding: 4em;
	background: papayawhip;
  `;

  const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.style ? "palevioletred" : "white"};
  color: ${props => props.style ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;
const ReversedButton = props => <Button {...props} children={props.children.split('').reverse()} />

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

return (
  <div>
    <Button as="a" href="#">Normal</Button>
    <Button as={ReversedButton}>Custom Button with Normal Button styles</Button>
    <Button style>Primary</Button>
    <TomatoButton>Tomato Button</TomatoButton>
    <Input defaultValue="@probablyup" type="text" />
    <Input defaultValue="@geelen" type="text" inputColor="rebeccapurple" />
  </div>
  )
}

export default App