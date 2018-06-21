import React from "react";
import propTypes from "prop-types";

export default class MenuRender extends React.Component {
	constructor(props) {
		super(props);
		this.menuItemContent = props.menuItemContent;
		this.menuItemPrice = props.menuItemPrice;
		this.menuItemId = props.menuItemId;
		this.handleRemoveMenuItem = this.handleRemoveMenuItem.bind(this);
	}

	handleRemoveMenuItem(id) {
		this.props.removeMenuItem(id);
	}

	render(props) {
		return (
			<div className="menuRenderContent">


				<ul>
					<li>
						<p>{this.menuItemContent}</p>
						<p>{this.menuItemPrice}</p>
						<p>description</p>
						<img src="" alt="menu item img" />
					</li>

				</ul>
				

			</div>
		);
	}
}

MenuRender.propTypes = {
	menuItemContent: propTypes.string
};
