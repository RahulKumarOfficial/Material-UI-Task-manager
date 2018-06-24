import React, { Component } from 'react';
import Header from './Header';
import TodoItems from './TodoItems.js';
import InputTaker from './InputTaker.js';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';
import Modal from '@material-ui/core/Modal';
import './positionBtn.css';
import './App.css';
import { withStyles } from '@material-ui/core/styles';

import PropTypes from 'prop-types';


const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});





function getModalStyle() {
  const bottom= 0;
  const left =0;
  const right =20;
  

  return {
    bottom: `${bottom}%`,
    left:`${left}%`,
    right:`${left}%`,
    transform: `translate(-${bottom}%,-${left}%,-${right}%)`,
  };
}


class App extends Component{
 

constructor(props){
    super(props);
    this.state = {
      items: [],
      textFieldValue : '',
      checked:false,
    };
    
    this.AddElement = this.AddElement.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    
  } 

  handleChange = () => {
    this.setState({ checked: !this.state.checked });
  };

  handleOpen = () => {
    this.setState({ open: true });   
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  takeInput = (e) =>{
    this.setState({
    textFieldValue: e.target.value
    });
  }
  
  AddElement(e) {
    console.log("Button add is clicked");
    if(this.state.textFieldValue!=""){
      console.log("inside function");
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
    
    render(){
      const {classes} = this.props;
      return(
        <div className="MainClass">
          <Typography variant="display3" gutterBottom position="sticky">My Tasks</Typography>
          <TodoItems entries = {this.state.items}
          delete={this.deleteItem}
          update={this.updateItem}
            />
          <div className="footer">
            <InputTaker />
            <Header />
          </div>

          <div id="divfix">
            <Button variant="contained" onClick={this.handleOpen} mini color="primary" id="rounded" >
              Add a new task
              <AddIcon />
            </Button>
            <Modal
                aria-labelledby="simple-modal-title"
                open={this.state.open}
                onClose={this.handleClose}
              >
                <div style={getModalStyle()} className={classes.paper}>
                  <Typography variant="title" id="modal-title">Text in a modal</Typography>
                 
                  </div>
            </Modal>           
          </div>
          
        </div>
        
      )}
}
const SimpleModalWrapped = withStyles(styles)(App);
export default SimpleModalWrapped;