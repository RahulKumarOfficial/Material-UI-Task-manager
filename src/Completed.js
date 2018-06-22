import React,{ Component } from 'react';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Content from './Content';
class Completed extends Component{
render(){
    return (
        <div>

        <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="title">Completed</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <Content />
        </ExpansionPanelDetails>
      </ExpansionPanel>

       
        </div>
    )
}
    //it should be a drop down menu
}
export default Completed;