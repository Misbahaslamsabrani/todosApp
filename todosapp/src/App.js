import React, { Component } from 'react';
import './App.css';

import InputField from './InputField';

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
  additem = () =>{
    const copyallItems = this.state.allItems.slice(0);
    if(this.state.editItem == null){
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
    console.log(index);
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
      <div className="heading">todos</div>
      <form action="JavaScript:void(0)">
      <InputField type="text" name="todosAdd" id="todosAdd" whenChange={this.whenchange} value={this.state.todosAdd}/>
      <span className="space">
      <AddButton text="Add" className="btn btn-light" addItem={this.additem}/>
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
