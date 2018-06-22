import React,{ Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
class Content extends Component{

    render(){
        return(
            <div>
            <List>
        {[0, 1, 2, 3].map(value => (
          <ListItem
            key={value}
            role={undefined}
            dense
            button
             >
            <Checkbox
             
              tabIndex={-1}
              disableRipple
            />
            <ListItemText primary={`Content ${value + 1}`} />
            <ListItemSecondaryAction>
              
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
            </div>
        )
    }
}
export default Content;