import React from 'react'
import { render } from 'react-dom'
import Hello from './Hello'

const styles = {
	fontFamily: 'sans-serif',
	textAlign: 'center'
}
const Message = ({ name }) => <h2>I am {name}</h2>
const App = () => (
	<div style={styles}>
		<Hello name="CodeSandbox" />
		<Message name="Simon" />
		<h2>Start editing to see some magic happen {'\u2728'}</h2>
	</div>
)

render(<App />, document.getElementById('root'))
