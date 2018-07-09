import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

const drawerWidth = 240;

const styles = theme => ({
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  logo: {
    height: 54,
    textAlign: 'center',
    paddingTop: 10,
  },
});

class NavDrawer extends Component {
  goToPath(path) {
    this.props.handleDrawerToggle();
    this.props.history.push(path);
  }

  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <div>
        <div className={classes.toolbar} />
          <div className={classes.logo}>
            <Typography variant="display1">
              PClub
            </Typography>
          </div>        
        <Divider />
        <List component="nav">
          <ListItem button onClick={() => this.goToPath('/home/')}>
            <ListItemText primary="Home"/>
          </ListItem>
          <ListItem button  onClick={() => this.goToPath('/resources/')} >
            <ListItemText primary="Resources" />
          </ListItem>
        </List>
      </div>
    );
    return (
      <div>
        <Hidden mdUp>
          <SwipeableDrawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={this.props.drawerOpen}
            onClose={() => this.props.handleDrawerToggle()}
            onOpen={() => this.props.handleDrawerToggle()}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </SwipeableDrawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </div>
    );
  }
}

export default withRouter(withStyles(styles, { withTheme: true })(NavDrawer));
