import React,{ Component } from 'react';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
const Trash = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>								

class TodoItems extends Component{
    constructor(props){
        super(props);
       
        this.createTasks= this.createTasks.bind(this);
        
    }
    createTasks(item){
        console.log(item.text);
        this.state={
            inputValue : item.text
        };
        // <button onClick={()=>this.delete(item.text)}>Delete</button>
        // <button onClick = {()=>this.update(item.text)}>Update</button>

       
        
        return( <div><li> <Typography variant="title" gutterBottom>{this.state.inputValue}<IconButton onClick={()=>this.delete(item.text)}><DeleteIcon /></IconButton></Typography>
        
        </li>
        </div>)
     
}
updatable(event){

    this.setState({inputValue:event.target.inputValue});
    console.log(event.target.inputValue);
}


update(text){
    this.props.update(text);
}
delete(text){
    this.props.delete(text);
    console.log("To be deleted : "+text);
}

    render(){
    
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);
        console.log(listItems);
        return(
            <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="title">To-do List here</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
            <ul>
            {listItems}
            </ul>
            </ExpansionPanelDetails>
          </ExpansionPanel>
    
           
        )
    }
}
export default TodoItems;