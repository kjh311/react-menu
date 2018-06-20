import React, { Component } from "react";
import propTypes from "prop-types";

export default class MenuItem extends React.Component {
	constructor(props) {
		super(props);
		this.menuItemContent = props.menuItemContent;
		this.menuItemId = props.menuItemId;
		this.handleRemoveMenuItem = this.handleRemoveMenuItem.bind(this);
	}

	handleRemoveMenuItem(id) {
		this.props.removeMenuItem(id);
	}

	render(props) {
		return (
			<div className="menuItemContent">
				<table className="table ">
								<tbody>
									<tr>
										<th scope="row" />
										
										<td>
											<input
												className="menuItemContent" placeholder={this.menuItemContent}
											/>
											<input placeholder="price"/>
											<input placeholder="description"/>
											<input placeholder="image"/>
										</td>
										<td>
										<button className="btn btn-success editBtn">Edit</button>

										</td>
										<td><button className="btn btn-danger closeBtn" onClick={() => {if(window.confirm('Delete the item?')) this.handleRemoveMenuItem(this.menuItemId)}}>Delete</button></td>
									</tr>
									{/*onClick={() => {if(confirm('Delete the item?')) {this.deleteItem};}}*/}
		
								</tbody>
							</table>
				

			</div>
		);
	}
}

MenuItem.propTypes = {
	menuItemContent: propTypes.string
};
