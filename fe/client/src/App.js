import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormSubmit from './components/Form';
import Home from './components/Home'


class App extends React.Component {
  state ={
    ShowComponent: 'Home'
  }

  handleClick = () => {
    this.setState({
      ShowComponent: "Form"
    })
  }

  render() {
    if (this.state.ShowComponent === "Home" || !window.web3) {
        return (
            <div>
                <Home handleClick={this.handleClick}/>
            </div>)
    } 
    else if (this.state.ShowComponent === "Form") {
        return (
            <div>
                <FormSubmit/>
            </div>
        );
    }
    return true;
}
}


export default App;
