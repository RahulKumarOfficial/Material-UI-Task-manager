import React, { Component } from 'react';
import Header from './Header';
import TodoShow from './TodoShow';
import PositionedSnackBar from './PositionedSnackBar';
import TodoItems from './TodoItems.js';
import InputTaker from './InputTaker.js';
import Typography from '@material-ui/core/Typography';
import './App.css';
class App extends Component{
   
    render(){
        return(
            <div className="MainClass">
            <Typography variant="display3" gutterBottom position="sticky">
        My Tasks
      </Typography>
           
      
            
           <div className="footer">
           <InputTaker />
           <Header />
           </div>
            
            </div>
        )
    }
}
export default App;