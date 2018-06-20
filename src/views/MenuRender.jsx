import React from "react";
import propTypes from "prop-types";

export default class MenuRender extends React.Component {
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
			<div className="menuRenderContent">


				<ul>
					<li>
						<p>{this.menuItemContent}</p>
						<p>price</p>
						<p>description</p>
						<img src="" />
					</li>

				</ul>
				

			</div>
		);
	}
}

MenuRender.propTypes = {
	menuItemContent: propTypes.string
};
