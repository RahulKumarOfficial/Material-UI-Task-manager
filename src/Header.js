import React,{ Component, Fragment } from 'react';
import MenuAppBar from './MenuAppBar';


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
        
     <MenuAppBar />
        </Fragment>
    )
}
}

export default Header;