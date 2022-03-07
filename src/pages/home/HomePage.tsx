import React from "react";
import { Content } from "../../components/content/Content";
import { Sidebar } from "../../components/sidebar/Sidebar";

import "./HomePage.css";

export const HomePage = () => {
	return (
		<div>
			<Sidebar/>
			<Content/>
		</div>
	);
};
