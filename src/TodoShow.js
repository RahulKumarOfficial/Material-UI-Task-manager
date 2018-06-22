import React,{ Component } from 'react';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class TodoShow extends Component{
render(){
    return (
        <div>

        <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="title">To-do List here</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
  
        </ExpansionPanelDetails>
      </ExpansionPanel>

       
        </div>
    )
}
    //it should be a drop down menu
}
export default TodoShow;