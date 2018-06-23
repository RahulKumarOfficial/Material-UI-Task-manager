import React, { Component } from 'react';
import Header from './Header';
import TodoShow from './TodoShow';
import PositionedSnackBar from './PositionedSnackBar';
import TodoItems from './TodoItems.js';
import InputTaker from './InputTaker.js';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import './positionBtn.css';
import './App.css';
const styles = theme =>({
  FormControl:{
    width:500
  }
})
class App extends Component{
   
constructor(props){
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
        
        {
          console.log("inside function");
          // this.handleClick();
          var newItem = {
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
            <div className="MainClass">
            <Typography variant="display3" gutterBottom position="sticky">
        My Tasks
      </Typography>
      <TextField
      value={this.state.textFieldValue}
      label="Enter the Task!"
     onChange ={this.takeInput}
      className = {FormControl}
      
      margin="normal"
    />
      <TodoItems entries = {this.state.items}
      delete={this.deleteItem}
      update={this.updateItem}
      />
      
            
           <div className="footer">
           <InputTaker />
           <Header />
           </div>
           <div id="divfix">
           <Button variant="contained" onClick={this.AddElement} mini color="primary" id="rounded" >
           Add the text here
           <AddIcon />
       </Button> 
           </div>
           
            </div>
        )
    }
}
export default App;