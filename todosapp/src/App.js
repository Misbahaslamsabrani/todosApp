import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import './App.css';


import AddButton from './addbutton';
import ShowItems from './showItems';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todosAdd: "",
      allItems: [],
      editItem: null
    }
  }
  whenchange = (event) =>{
    const {name, value} = event.target;
    this.setState({[name]: value})
  }
  additem = (event) =>{
    event.preventDefault();
    const copyallItems = this.state.allItems.slice(0);
    if(this.state.todosAdd == ''){
      return 
    }
    else if(this.state.editItem == null){
    copyallItems.push(this.state.todosAdd);
    }
    else{ copyallItems[this.state.editItem] = this.state.todosAdd;
    }
    this.setState({
      allItems: copyallItems,
      todosAdd: ""
    })

  }
  
  edititem = (index) => {
    this.setState({
      todosAdd : this.state.allItems[index],
      editItem : index
    })
  }






  delitem = (index) => {
    this.state.allItems.splice(index,1);
    this.setState({allItems: this.state.allItems})
    
    
  }
  render() {
    
    return (
      <div className="App">
      <div className="heading">To-Do App</div>
      <form onSubmit={this.additem}>
      <TextField
          id="standard-name"
          label="Add Item"
          value={this.state.todosAdd}
          onChange={this.whenchange}
          margin="normal"
          name="todosAdd"
          className="checkfield"
        />
      
      <span className="space">
      <AddButton text="Add" className="btn btn-info"/>
      </span>
      </form>
      <table>
      <tbody>
        {
          this.state.allItems.map((item, index) =>{
            return <ShowItems key={index} text={item} editItem={this.edititem} delItem={this.delitem} id={index} num={index+1}/>
          })
        }
      </tbody>
      </table>
      </div>
    );
  }
}

export default App;
