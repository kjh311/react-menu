import React from "react";
// import Admin from "./Admin";
// import Login from "./Login";
// import Home from "./Home";
import fire from "../config/Fire";
import MenuItem from "./MenuItem";
import MenuForm from "./MenuForm";
import * as firebase from "firebase";

export default class Crud extends React.Component {
	constructor(props) {
		super(props);
		this.logout = this.logout.bind(this);
		this.addMenuItem = this.addMenuItem.bind(this);
		this.removeMenuItem = this.removeMenuItem.bind(this);
		this.state = {
			user: {},
			menuItems: []
		};
	}

	componentWillMount() {
		this.authListener();
		// const rootRef = firebase.database().ref().child('react');

		const restaurantRef = firebase
			.database()
			.ref()
			.child("restaurant");
		const nameRef = restaurantRef.child("name");
		// const menuRef = restaurantRef.child("menu");
		this.database = restaurantRef.child("menu");

		const tagLineRef = restaurantRef.child("tagline");
		const titleBackgroundRef = restaurantRef.child("titleBackground");

		// console.log(JSON.stringify(nameRef));
		// console.log(menuRef);

		const previousMenuItems = this.state.menuItems;

//add new menu item
		this.database.on("child_added", snap => {
			previousMenuItems.push({
				id: snap.key,
				menuItemContent: snap.val().menuItemContent,
				menuItemPrice: snap.val().menuItemPrice,
			});

			this.setState({
				menuItem: previousMenuItems
			});
		});

//delete menu item
		this.database.on("child_removed", snap => {
			for (var i = 0; i < previousMenuItems.length; i++) {
				if (previousMenuItems[i].id === snap.key) {
					previousMenuItems.splice(i, 1);
				}
			}

			this.setState({
				menuItem: previousMenuItems
			});
		});

		nameRef.on("value", snap => {
			this.setState({
				name: snap.val()
			});
		});

		titleBackgroundRef.on("value", snap => {
			this.setState({
				titleBackground: snap.val()
			});
		});

		tagLineRef.on("value", snap => {
			this.setState({
				tagline: snap.val()
			});
		});
	}

	authListener() {
		fire.auth().onAuthStateChanged(user => {
			if (user) {
				this.setState({ user });
			} else {
				this.setState({ user: null });
			}
		});
	}

	logout() {
		fire.auth().signOut();
	}

	addMenuItem(menuItem) {
		this.database.push().set({ menuItemContent: menuItem, menuItemPrice: menuItem,  });
		
	}

	removeMenuItem(menuItemId) {
		this.database.child(menuItemId).remove();
	}

	render() {
		return (
			<div className="menuItemsWrapper">
				<div className="menuItemHeader">
					<div className="row">
						<div className="col-md-3" />
						<div className="col-md-6">
							<h1>You are logged in!!!</h1>
							<h2>Admin Page!!!</h2>

							<button
								className="btn btn-danger"
								onClick={this.logout}
							>
								Logout
							</button>

						

							<div className="menuItemsBody">
								{this.state.menuItems.map(menuItem => {
									return (
										<MenuItem
											menuItemPrice={
												menuItem.menuItemPrice
											}
											menuItemContent={
												menuItem.menuItemContent
											}
											
											menuItemId={menuItem.id}
											key={menuItem.id}
											removeMenuItem={this.removeMenuItem}
										/>
									);
								})}
							</div>

							<div className="menuFooter" />
							<MenuForm addMenuItem={this.addMenuItem} />
						</div>
						<div className="col-md-3" />
					</div>
				</div>
			</div>
		);
	}
}
