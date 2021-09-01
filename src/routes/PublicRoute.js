import React from 'react';
import {Route} from 'react-router-dom';

const PublicRoute = ({component : Component})=>{

	return(
		<Route 
			render = {props => <Component {...props} />}
		/>
	)
}

export default PublicRoute;
