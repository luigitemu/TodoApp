import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import { startLoadingNotes } from "../../action/notes";
import { Content } from "../../components/content/Content";
import { Sidebar } from "../../components/sidebar/Sidebar";

import "./HomePage.css";

export const HomePage = () => {
	const dispatch =useDispatch();
	useEffect(() => {
	  dispatch(startLoadingNotes());
	}, [])
	
	return (
		<div className="home">
			<ToastContainer />
			<Sidebar/>
			<Content/>
		</div>
	);
};
