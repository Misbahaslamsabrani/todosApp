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
    if(this.state.todosAdd === ''){
      return 
    }
    else if(this.state.editItem == null){
    copyallItems.push(this.state.todosAdd);
    }
    else{ copyallItems[this.state.editItem] = this.state.todosAdd;
    }
    this.setState({
      allItems: copyallItems,
      todosAdd: "", 
      editItem: null
    })
    
  }
  
  edititem = (index) => {
    
    this.setState({
      todosAdd : this.state.allItems[index],
      editItem : index
    })
  }






  delitem = (index) => {
    const temparr = this.state.allItems.slice(0);

    temparr.splice(index,1);
    
    this.setState({allItems: temparr})
    if(this.state.editItem > index){
         this.setState({editItem: --this.state.editItem})
    } 
    if(this.state.todosAdd === this.state.allItems[index]){
      this.setState({todosAdd: '', editItem: null})
    }
    
    
    
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
      {
        this.state.allItems.length > 0 ? (<table className="table table1">
        <ShowItems allItems={this.state.allItems} edititem={this.edititem} delitem={this.delitem} />
        </table>) : <div className="notodo"> "You have no to-do in the list" </div>
      }
      </div>
    );
  }
}

export default App;
