import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Img from 'react-image';

const styles = theme => ({
  title: {
  	color: 'black',
  },
  flexParent: {
  	color: 'grey',
  	display: 'flex',
  	alignItems: 'center',
  	width: '100%',
  },
  skeleton: {
  	width: "95%",
  	margin: "5%",
  	paddingTop: "85%",
  	borderRadius: "8px",
  	backgroundColor: "rgb(239, 241, 246)",
  },
});

class Home extends Component {
	componentDidMount() {
	}

	render() {
		const { classes } = this.props;
		const load = <div className={["react-skeleton-load", "animated", classes.skeleton]} />;
		return (
			<div>
				
				<Grid container spacing={24}>
					<Grid item md={6} className={classes.flexParent}>
						<Img
							width="95%"
							src={"/static/img/laptop.svg"}
							loader={load}
						/>
					</Grid>
					<Grid item md={6} className={classes.flexParent}>
						<div>
							<Typography variant="display3" className={classes.title}> We are the Pclub! </Typography>
							<p>
								We are a bunch of students who love coding and admire open source with all our hearts.
								Programming club is one of the biggest clubs of Panjab University.
								We aim to create a platform which helps students gain assistance and mentorship and eventually
								enhance their abilities. We intend to induce and propagate enthusiasm for programming in the 
								institute and the University. We believe that every student should have an opportunity to learn
								how to code and we help them develop that passion for it.
							</p>
						</div>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default withStyles(styles, { withTheme: true })(Home);