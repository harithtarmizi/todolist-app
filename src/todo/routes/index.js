import * as React from 'react';
import { Route, Routes } from "react-router-dom";
import { AboutPage, TodoPage  } from '../pages';

export const InitRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<TodoPage />} />
			<Route path='/about' element={<AboutPage />} />
		</Routes>
	)
}