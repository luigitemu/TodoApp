import React from "react";
import { ToastContainer } from "react-toastify";
import { Content } from "../../components/content/Content";
import { Sidebar } from "../../components/sidebar/Sidebar";

import "./HomePage.css";

export const HomePage = () => {
	return (
		<div className="home">
			<ToastContainer />
			<Sidebar/>
			<Content/>
		</div>
	);
};
