import React,{ Component, Fragment } from 'react';
import MenuAppBar from './MenuAppBar';
import Typography from '@material-ui/core/Typography';

class Header extends Component{

render(){
  const styles = {
    root: {
      flexGrow: 1,
    },
    flex: {
      flex: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  };
    return(
        <Fragment>
        <Typography variant="display3" gutterBottom>
        My Tasks
      </Typography>
     <MenuAppBar />
        </Fragment>
    )
}
}

export default Header;