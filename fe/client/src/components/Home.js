import React, { Component } from 'react'
import NavBar from './NavBar'
import {Jumbotron, Button} from 'react-bootstrap'
import MetaMaskLoginButton from 'react-metamask-login-button';

//import FormSubmit from './Form'

export class Home extends Component {
      render() {
        //if(this.state.ShowComponent === 'Home'){
          return (
                <div>
                    <NavBar/>
                  <Jumbotron>
                    <h1>Hello, world!</h1>
                    <p>
                        This is a simple call option, please sign in with your metamask in order to proceed.
                    </p>
                    <p>
                        <Button variant="primary">Learn more</Button>
                    </p>
                </Jumbotron>  
                <div>
                    <MetaMaskLoginButton />
                    <Button variant="outline-dark" onClick={this.props.handleClick}>Create Your First Option Contract NOW!</Button>
                </div>
                </div>
            )
          }
        }
    





export default Home;
