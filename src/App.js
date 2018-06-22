import React, { Component } from 'react';
import Header from './Header';
import TodoShow from './TodoShow';
import PositionedSnackBar from './PositionedSnackBar';
import TodoItems from './TodoItems.js';
import InputTaker from './InputTaker.js';
class App extends Component{
   
    render(){
        return(
            <div className="MainClass">
            <Header />
           
            <InputTaker />
            </div>
        )
    }
}
export default App;