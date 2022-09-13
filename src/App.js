import React from 'react';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstCount: 0,
			secondCount: 0,
		};
		this.count = this.count.bind(this);
	}
	count(e) {
		e.preventDefault();
		const div = e.target.parentElement;
		div.className === 'first'
			? this.setState({
					firstCount: this.state.firstCount + 1,
			  })
			: this.setState({
					secondCount: this.state.secondCount + 1,
			  });
	}
	render() {
		return (
			<div className="container">
				<div className="first">
					<h2>Hello, world </h2>
					<p>This is a one thing</p>
					<button onClick={this.count}>Click me</button>
					<p>I have been toggled {this.state.firstCount} times</p>
				</div>
				<div className="second">
					<h2>Hello, world</h2>
					<p>This is a another thing.</p>
					<button onClick={this.count}>Click Me</button>
					<p>I have been toggled {this.state.secondCount} times</p>
				</div>
			</div>
		);
	}
}
export default App;
