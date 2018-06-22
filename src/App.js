import React, { Component } from 'react';
import Header from './Header';
import Completed from './Completed';
import PositionedSnackBar from './PositionedSnackBar';
import TodoItems from './TodoItems.js';
class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
          items: []
        };
        this.AddElement = this.AddElement.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.updateItem = this.updateItem.bind(this)
      }
      AddElement(e) {
        console.log("Button add is clicked");
        var newItem = {
          text: this.inputElement.value,
          key: Date.now()
        };
        let {text} = newItem;
        
        this.inputElement.value="";
        this.setState(prevState =>{
    
          return{
            items:prevState.items.concat(newItem)
          };
        });
        console.log(this.state.items);
        this.inputElement.value="";
        e.preventDefault();
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
            <Header />
            <Completed />
            <input
            type="text"
            placeholder="Hey! Type something to note"
            ref={a => (this.inputElement = a)}
         />
          <button type="submit" onClick={this.AddElement}>
            Add To List
          </button>
        
        <br></br>
         <TodoItems entries = {this.state.items}
         delete={this.deleteItem}
         update={this.updateItem}
         />
            </div>
        )
    }
}
export default App;