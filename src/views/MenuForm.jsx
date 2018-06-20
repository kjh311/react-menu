import React from "react";

export default class MenuForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			newMenuItemContent: '',
		};
		this.handleUserInput = this.handleUserInput.bind(this);
		this.writeMenuItem = this.writeMenuItem.bind(this);
	}

	handleUserInput(e){
		// console.log(this);
		this.setState({
			newMenuItemContent: e.target.value, //the value of the text input
		})
	}

	writeMenuItem(){
		//a method that sets the menuitemcontent to value of input

		this.props.addMenuItem(this.state.newMenuItemContent);

		this.setState({
			//set newmenuitemcontent to empty string
			newMenuItemContent: '',
		})

	}

	render() {
		return (
			<div className="formWrapper">
			<form onSubmit={this.writeMenuItem}>
				<input
					className="menuInput"
					placeholder="input new menu item"
					value={this.state.newMenuItemContent}
					onChange={this.handleUserInput}
					required
				/>
				<input type="submit" className="menuButton btn btn-success" placeholder="add menu item" />
				</form>
			</div>
		);
	}
}
