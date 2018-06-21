import React from "react";

export default class MenuForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			newMenuItemContent: '',
			newMenuItemPrice: '',
		};
		this.handleChange = this.handleChange.bind(this);
		// this.handlePriceInput = this.handlePriceInput.bind(this);
		this.writeMenuItem = this.writeMenuItem.bind(this);
	}

	handleChange(e){
		this.setState({
			[e.target.name]: e.target.value, //the value of the text input
		})
		
	}

	// handlePriceInput(e){
	// 	console.log(this);
	// 	this.setState({
	// 		newMenuItemPrice: e.target.value, //the value of the text input
	// 	})
	// }

	writeMenuItem(){
		//a method that sets the menuitemcontent to value of input
		// alert(this.state.newMenuItemContent + " " + this.state.newMenuItemPrice)
		

		this.setState({
			//set newmenuitemcontent to empty string
			newMenuItemContent: '',
			newMenuItemPrice: '',
		})



		this.props.addMenuItem( this.state.newMenuItemContent,  this.state.newMenuItemPrice);
		// this.props.addMenuItem( this.state.newMenuItemPrice);

		// console.log(this.state.newMenuItemContent + " " + this.state.newMenuItemPrice)

	}

	render() {
		return (
			<div className="formWrapper">
			<form onSubmit={this.writeMenuItem}>
				<input
				 	name="newMenuItemContent"
					className="menuInput"
					placeholder="input new menu item"
					onChange={this.handleChange.bind(this)}
					value={this.state.newMenuItemContent}
					required
				/>
				<input
				 	name="newMenuItemPrice"
					type="number"
					min="0.01" step="0.01"
					className="menuInput"
					placeholder="input new menu price"
					onChange={this.handleChange.bind(this)}
					value={this.state.newMenuItemPrice}
					required
				/>
				<input type="submit" className="menuButton btn btn-success" placeholder="add menu item" />
				</form>
			</div>
		);
	}
}
