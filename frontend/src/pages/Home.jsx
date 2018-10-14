import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Skeleton from 'react-skeleton-loader'; // Do not remove. Styles are being used.
import Img from 'react-image';
import Label from '@material-ui/icons/Label';

const styles = theme => ({
  title: {
  	color: '#424242',
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
  heading: {
  	color: 'white',
  	backgroundColor: "#424242",
  	paddingLeft: "5px",
  	paddingRight: "5px",
  	borderRadius: "10px",
  },
});


const Home = ({classes}) => {
	const load = <div className={`react-skeleton-load animated ${classes.skeleton}`} />;
  	return (
		<div>
		<center>
		<Grid container spacing={24} style={{ width: '90%'}}>
			<Grid item md={4} className={classes.flexParent}>
				<Img
					width="95%"
					src={"/static/img/laptop.svg"}
					loader={load}
				/>
			</Grid>
			<Grid item md={8} className={classes.flexParent}>
				<div>
					<Typography variant="display3" align="center" className={classes.title}> We're the <span className={classes.heading}>Pclub</span> </Typography>
					<p align="center">
						We are a bunch of students who love coding and admire open source with all our hearts.
						We aim to create a platform which helps students gain assistance and mentorship and eventually
						enhance their abilities.
					</p>
				</div>
			</Grid>
		</Grid>
		</center>
		<br />
		<br />
		<Typography variant="display2" className={classes.title}> <Label /> What we do </Typography>
		<p>
			We believe that programming is an essential skill and everyone should know at least the basics.
			The field of study doesn't matter. We start with the very basics. We help students acquire this
			essential skill.
		</p>
		<br />
		<br />
		<Typography variant="display2" className={classes.title}> <Label /> How we do it </Typography>
		<p>
			We hold sessions for which students volunteer. These sessions can be about any technology or
			language. Some of them are <i>Competetive Programming, AI, Open Source,</i> etc.
		</p>
	</div>
  	)
	}	

export default withStyles(styles, { withTheme: true })(Home);