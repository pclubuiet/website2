import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import Home from './pages/Home';
import Resources from './pages/Resources';
import Nav from './components/Nav';
import NavDrawer from './components/NavDrawer';

const drawerWidth = 240;
const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[800],
    },
  },
});

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
    marginTop: 55,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    overflow: 'scroll',
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
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <div className={classes.root}>
            <Nav handleDrawerToggle={() => this.drawerToggle()} />
            <NavDrawer drawerOpen={this.state.drawerOpen} handleDrawerToggle={() => this.drawerToggle()} />
            <div className={classes.content}>
              <Switch>
                <Route path={'/home/'} exact component={Home} />
                <Route path={'/resources/'} exact component={Resources} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles, { withTheme: true })(App);
