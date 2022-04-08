import * as React from 'react';
import { Route, Routes } from "react-router-dom";
import { TodoPage, AboutPage } from "../pages";

export const InitRoutes = () => {
	return (
		<div>
			<Routes>
				<Route path='/' element={<TodoPage />} />
				<Route path='/' element={<AboutPage />} />
			</Routes>
		</div>
	)
}