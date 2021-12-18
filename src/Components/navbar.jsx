import React from 'react';
import { Link } from "react-router-dom";
class Nav extends React.Component {
	render() { 
		return (
			<React.Fragment>
				<nav className="navbar NavBar navbar-expand-lg navbar-dark bg-transparent">
					<div className="container">
						<Link className="btn logo-name text-white" to="/">
							Omar Abdelatif
						</Link>
						<ul className="navbar-nav my-auto">
							<li className="nav-item">
								<a className="btn text" href="https://drive.google.com/file/d/1PLF0Hq3ZFIf9YZZQiZ5hKBSH4KC4KLi4/view?usp=sharing">
									Download CV
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</React.Fragment>
		);
	}
}
export default Nav;





































/*
const Nav = () => {
	handleDelete = () => {
		console.log('Deleted');
	}
    return (
		<React.Fragment>
			<nav className="navbar NavBar navbar-expand-lg navbar-dark bg-transparent">
				<div className="container">
					<Link className="btn logo-name text-white" to="/">
						Omar Abdelatif
					</Link>
					<ul className="navbar-nav my-auto">
						<li className="nav-item">
							<a className="btn text" href="https://drive.google.com/file/d/1PLF0Hq3ZFIf9YZZQiZ5hKBSH4KC4KLi4/view?usp=sharing">
								Download CV
							</a>
						</li>
					</ul>
					<button className="btn btn-danger" onClick={this.handleDelete}></button>
				</div>
			</nav>
		</React.Fragment>
	);
}
export default Nav;
*/