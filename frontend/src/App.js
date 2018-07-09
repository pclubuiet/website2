import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Routes from './Routes';
import Nav from './components/Nav';
import NavDrawer from './components/NavDrawer';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  content: {
    flexGrow: 1,
    marginTop: 30,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false,
    }
  }

  drawerToggle() {
    console.log("called");
    this.setState({ drawerOpen: !this.state.drawerOpen });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Nav handleDrawerToggle={() => this.drawerToggle()} />
        <NavDrawer drawerOpen={this.state.drawerOpen} handleDrawerToggle={() => this.drawerToggle()} />
        <main className={classes.content}>
          <Routes />  
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(App);
