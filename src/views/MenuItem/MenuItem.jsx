import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class MenuItem extends React.Component {

	constructor(props){
		super(props);
		this.menuItemContent = props.menuItemContent;
		this.menuItemId = props.menuItemId;
	}

	render(props){
		return(
			<div className="menuItemContent">
				<p className="menuItemContent">{this.menuItemContent}</p>
			</div>	
		)
	}
	

}

MenuItem.propTypes = {
	menuItemContent: propTypes.string
}



