import React from "react";
// import Admin from "./Admin";
// import Login from "./Login";
// import Home from "./Home";
import fire from "../config/Fire";
import MenuItem from "./MenuItem/MenuItem";
import MenuForm from "./MenuForm/MenuForm";
import * as firebase from "firebase";

export default class Crud extends React.Component {
	constructor(props) {
		super(props);
		this.logout = this.logout.bind(this);
		this.addMenuItem = this.addMenuItem.bind(this);
		this.state = {
			user: {},
			menuItems: [
				{ id: 1, menuItemContent: "Menu item 1 here!" },
				{ id: 2, menuItemContent: "Menu item 2a here!" }
			]
		};
	}

	componentDidMount() {
		this.authListener();
		// const rootRef = firebase.database().ref().child('react');

		const restaurantRef = firebase
			.database()
			.ref()
			.child("restaurant");
		const nameRef = restaurantRef.child("name");
		const menuRef = restaurantRef.child("menu");

		const tagLineRef = restaurantRef.child("tagline");
		const titleBackgroundRef = restaurantRef.child("titleBackground");

		// console.log(JSON.stringify(nameRef));
		// console.log(menuRef);

		menuRef.on("value", snap => {
			this.setState({
				menu: snap.val()
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
		//push menuitem to menuItems array
		const previousMenuItems = this.state.menuItems;
		console.log(previousMenuItems)
		previousMenuItems.push({
			id: previousMenuItems.length + 1, menuItemContent: menuItem
		});
		this.setState({
			menuItems: previousMenuItems
		})
		
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

							<table className="table ">
								<tbody>
									<tr>
										<th scope="row" />
										<td>Name of Business:</td>
										<td>
											<input
												placeholder={this.state.name}
											/>
										</td>
									</tr>
									<tr>
										<th scope="row" />
										<td>Jacob</td>
										<td>Thornton</td>
									</tr>
								</tbody>
							</table>

							<div className="menuItemsBody">
								{this.state.menuItems.map(menuItem => {
									return (
										<MenuItem
											menuItemContent={
												menuItem.menuItemContent
											}
											menuItemId={menuItem.id} 
											key={menuItem.id}
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
