import React from 'react';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
class InputTaker extends React.Component{

    render(){
        return(
            <div>
            <form>
            <TextField
           
            label="Enter the Task!"
            ref={a => (this.inputElement = a)}
            
            
            margin="normal"
          />
          <br/>
       
            </form>
            </div>

        )
    }
}
export default InputTaker;