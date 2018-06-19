import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class MenuItem extends React.Component {

	constructor(props){
		super(props);
		this.menuItemContent = props.menuItemContent;
		this.menuItemId = props.menuItemId;
		this.handleRemoveMenuItem = this.handleRemoveMenuItem.bind(this);
	}

	handleRemoveMenuItem(id){
		this.props.removeMenuItem(id);
	}

	render(props){
		return(
			<div className="menuItemContent">
			<p className="menuItemContent">{this.menuItemContent}</p>
			<span className="closeBtn" onClick={() => this.handleRemoveMenuItem(this.menuItemId)}>X</span>
				
			
			</div>	
		)
	}
	

}

MenuItem.propTypes = {
	menuItemContent: propTypes.string
}



