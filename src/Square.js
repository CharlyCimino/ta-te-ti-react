import React from 'react';

class Square extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: null
		};
	}

	handleClick = (e) => {
		this.setState({ value: 'X' });
	}

	render() {
		return (
			<button className="square" onClick={this.handleClick}>
				{this.state.value}
			</button>
		);
	}
}

export default Square;