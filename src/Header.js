import React,{ Component, Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
class Header extends Component{

render(){
    return(
        <Fragment>
        <AppBar position="relative" color="default">
        <Toolbar>
        <Typography variant="display3" color="inherit"></Typography>
          <Typography variant="display3" color="inherit">
            My Tasks
          </Typography>
        </Toolbar>
      </AppBar>
        </Fragment>
    )
}
}

export default Header;