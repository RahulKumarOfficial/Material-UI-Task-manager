import React from 'react';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';

import Button from '@material-ui/core/Button';
import TodoItems from './TodoItems.js';
import Snackbar from '@material-ui/core/Snackbar';
const styles = theme =>({
    FormControl:{
      width:500
    },
    fabMoveUp: {
      transform: 'translate3d(0, -46px, 0)',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.enteringScreen,
        easing: theme.transitions.easing.easeOut,
      }),
    },
    fabMoveDown: {
      transform: 'translate3d(0, 0, 0)',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.leavingScreen,
        easing: theme.transitions.easing.sharp,
      }),
    },
    snackbar: {
      position: 'absolute',
    },
    snackbarContent: {
      width: 360,
    },
  
  })
  
class InputTaker extends React.Component{
  state = {
    open: false,
  }
  handleClick = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  
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
        
        {
          this.handleClick();
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
      const { open } = this.state;
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
          />
          <div id="divfix">
          
          </div>
          
          
       </center>
       <Snackbar
       open ={open}
       autoHideDuration={1000}
       onClose={this.handleClose}
       
       message={<span>Nice! Successfully Added the list</span>}
       action={
         <Button color="inherit" size="small" onClick={this.handleClose}>
           Undo
         </Button>
       }
      
     />
            </form>
           
            </div>

        )
    }
}
export default InputTaker;