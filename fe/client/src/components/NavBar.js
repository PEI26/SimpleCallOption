import React, { Component } from 'react'
import {Navbar, Nav} from 'react-bootstrap'

export default class NavBar extends Component {
    constructor(prop){
        super(prop);
        this.state={loggedAccount: ""}
        this.getAccounts=this.getAccounts.bind(this);
    }
    
    getAccounts(){
        try{
            let userAccount = window.eth.accounts[0]
            this.setState({loggedAccount: userAccount})
            //return userAccount
        }catch(error){
            return 'user account'
        }
    }
    render() {
        return (
            <div>
                <Navbar>
                    <Navbar.Brand href="">Xoption</Navbar.Brand>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}
