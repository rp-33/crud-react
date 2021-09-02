import React from 'react';
import {Snackbar} from '@material-ui/core';

const Toast = ({open,text,onClose})=>{

	return(
		<Snackbar
        	anchorOrigin={{
        		vertical: 'bottom',
        		horizontal: 'left',
        	}}
        	open={open}
        	autoHideDuration={2000}
        	onClose={()=>onClose()}
        	message={text}
        />
	)
}

export default Toast;