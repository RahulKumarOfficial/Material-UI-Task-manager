import React,{ Component } from 'react';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
class Completed extends Component{
render(){
    return (
        <div>

        <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="title">Completed</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
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
            <ListItemText primary={`Line item ${value + 1}`} />
            <ListItemSecondaryAction>
              
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
        </ExpansionPanelDetails>
      </ExpansionPanel>

       
        </div>
    )
}
    //it should be a drop down menu
}
export default Completed;