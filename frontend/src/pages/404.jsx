import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
 container: {
    textAlign: 'center',
    marginTop: '2rem',
 },
 pageErrorCode: {
    fontWeight: 'bolder',
    fontSize: '8rem',
    textAlign: 'center',
    lineHeight: 'normal',
 }
 pageErrorMessage {
    fontSize: '1.5rem';
    textAlign: 'center';
 }
});

class Error extends Component {
	componentDidMount() {
	}

	render() {
    const { classes } = this.props;
    
    const code = 404;
    const message = "Page not found";

		return (
			<div className={classes.container}>
        <div className={classes.pageErrorCode}>{code}</div>
        <div className={classes.pageErrorMessage}>{message}</div>
      </div>
		);
	}
}

export default withStyles(styles, { withTheme: true })(Error);
