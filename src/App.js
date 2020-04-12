import React, { Component, Fragment } from "react";
import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import TourList from "./components/tour-list/TourList";

class App extends Component {
	render() {
		return (
			<Fragment>
				<Navbar />
				<TourList />
			</Fragment>
		);
	}
}

export default App;
