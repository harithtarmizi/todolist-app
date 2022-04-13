import React from "react";
import { ResponsiveAppBar } from '../../components'

export const TodoPage = () => {
	return (
		<>
		<ResponsiveAppBar title="Home" showBackBtn={false} />
		<div>
			<h1>This is Todo App</h1>
		</div>
		</>
	)
}