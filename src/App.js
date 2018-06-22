import React, { Component } from 'react';
import Header from './Header';
import Completed from './Completed';
class App extends Component{
    render(){
        return(
            <div className="MainClass">
            <Header />
            <Completed />
            </div>
        )
    }
}
export default App;