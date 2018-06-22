import React,{ Component } from 'react';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
        
    
        return( <div><li><input type="text" value = {this.state.inputValue} onChange={event=>this.setState({inputValue:event.target.value})} id="One"/>
        <button onClick={()=>this.delete(item.text)}>Delete</button>
        <button onClick = {()=>this.update(item.text)}>Update</button>
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