import React, { Component } from "react";
import {
    withStyles,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    IconButton,
    Grid,
    TextField,
    Button,
    FormControl
  } from "@material-ui/core";
  import ACTIONS from "../modules/action";
  import { connect } from "react-redux";

  const mapStateToProps = state => ({
    codes: state.code
});
  
const mapDispatchToProps = dispatch => ({
    changeCodeName: code=>dispatch(ACTIONS.changeCodeName(code))
});

  
class Home extends Component{

    constructor(){
        super();
        this.state={
            code:"Bienvenido a Project Code Names"
        }
    }
    
    handleSubmit = event => {
         console.log(this.props);
        
         this.props.changeCodeName(this.state.code);
     
        event.preventDefault();
    };
    
    render(){
    return(
    <div>
        <h1>{this.props.codes}</h1>
        <br></br>
        <Button  
        variant="contained" 
        align="center" 
        onClick={(event) => this.handleSubmit(event)}
        >
        Boom
        </Button> 
    </div>
        );
    
    }
    
    
    
    }
      export default connect(mapStateToProps, mapDispatchToProps)(Home);