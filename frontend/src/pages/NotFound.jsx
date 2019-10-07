import React from 'react';
import Typography from '@material-ui/core/Typography';
import Label from '@material-ui/icons/Label';

const NotFound = () => {
	return (
		<div>
			<Typography align="center" color="error" variant="headline"> <Label /> 400: Oops! Page Not Found </Typography>
		</div>
	);
}

export default NotFound;
