import React,{Component} from "react";

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
        return(
            <ul>
            {listItems}
            </ul>
        )
    }
}
export default TodoItems;