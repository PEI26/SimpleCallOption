import React, { Component } from 'react'
import API from '../backend-API'
import {Button, Form, Col, Row, Container} from 'react-bootstrap'

const apiPost = new API();
export default class PostPrice extends Component {
    constructor(props){
        super(props);
        this.state ={newAss: '',
                    newAssValue:''
                };
        this.addPrice = this.addPrice.bind(this);
        this.handleChange =this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }
    addPrice(){
        let obj = apiPost.postPrice(this.state).then(res=> res.json());
    }
    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }
    handleClick(e){
        e.preventDefault();
        this.addPrice()
    }
    render() {
        return (
            <div>
               <Container fluid style={{paddingLeft:400, paddingRight:400}}>
                  <Form>
                      <Form.Row>
                        <Col>
                          {/* <Form.Label>Example select</Form.Label> */}
                          <Form.Control name='newAss' value={this.state.newAss} onChange={this.handleChange} as="select">
                            <option>choose asset to add</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                          </Form.Control>
                        </Col>
                        <Col>
                          <Form.Control name='newAssValue' value={this.state.newAssValue} onChange={this.handleChange} placeholder="Enter current market price here" />
                        </Col>
                    </Form.Row>
                    <Button variant="link" type="submit" value="Submit" onClick={this.handleClick}>Submit</Button>
                  </Form>
                </Container> 
            </div>
        )
    }
}
