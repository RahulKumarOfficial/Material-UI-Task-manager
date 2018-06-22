import React from 'react';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import TodoItems from './TodoItems.js';
const styles = theme =>({
    FormControl:{
      width:500
    }
  })
  
class InputTaker extends React.Component{
   constructor(props) {
        super(props);
        this.state = {
          items: [],
          textFieldValue : ''
        };
        this.AddElement = this.AddElement.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.updateItem = this.updateItem.bind(this)
      }

      takeInput = (e) =>{
        this.setState({
            textFieldValue: e.target.value
        });
      }
      AddElement(e) {
        console.log("Button add is clicked");
        if(this.state.textFieldValue!="")
        {var newItem = {
          text: this.state.textFieldValue,
          key: Date.now()
        };
        let {text} = newItem;
        
        this.state.textFieldValue="";
        this.setState(prevState =>{
    
          return{
            items:prevState.items.concat(newItem)
          };
        });
        console.log(this.state.items);
        
        e.preventDefault();}
      }
      deleteItem(text){
        var filteredItems = this.state.items.filter(function(item){
          return (item.text!==text);
        });
        this.setState({
            items:filteredItems
        });
    }
    updateItem(text){
      //console.log("Text passed in App.js: "+text);
      var input  = window.prompt("Enter the new text here: ");
      var newItem = {
        text : input,
        key : Date.now()
      };
    
      this.deleteItem(text);
      
      this.setState(prevState =>{
    
        return{
          items:prevState.items.concat(newItem)
        };
      });
    }
    
    render(){
        return(
            <div>
            <form>
            <center>
            <TextField
            value={this.state.textFieldValue}
            label="Enter the Task!"
           onChange ={this.takeInput}
            className = {FormControl}
            
            margin="normal"
          /><Button variant="fab"  onClick={this.AddElement} mini>
          <AddIcon />
      </Button>
          
       </center>
            </form>
            <TodoItems entries = {this.state.items}
         delete={this.deleteItem}
         update={this.updateItem}
         />
            </div>

        )
    }
}
export default InputTaker;