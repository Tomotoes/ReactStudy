import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Routes = ['foo', 'bar', 'baz']
const BasicExample = () => (
	<Router>
		<div>
			<ul>
				{Routes.map(e => (
					<li>
						<Link to={e}>to: {e}</Link>
					</li>
				))}
			</ul>
			<hr />
		</div>
	</Router>
)

export default BasicExample
