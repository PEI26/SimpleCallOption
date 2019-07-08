import React, { Component } from 'react'
import NavBar from './NavBar'
import API from '../backend-API'
import {InputGroup, Form, Button, Row, Col, Container} from 'react-bootstrap'
import Option from './Option'

const api = new API();

class FormSubmit extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '',
                    currentPrice: '',
                    asset: '',
                    address:'',
                    strikePrice:'',
                    time:'',
                    rate:'',
                    isRedirect: true};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        this.renderOption = this.renderOption.bind(this);
    };
    componentWillMount(){
        //let price = api.getSpotPrice(this.state.value)
        let obj = api.getSpotPrice(this.state.value);
        this.setState({currentPrice:obj})
    }
    handleSubmit(e) {
        //let price = api.getSpotPrice(this.state.value)
        alert(this.state.currentPrice);
        localStorage.setItem('spotPrice', this.state.obj);
        e.preventDefault();
    }

    handleChange(e){
        this.setState({value: e.target.value});
    }
    handleChange2(e){
        this.setState({ [e.target.name]: e.target.value });
    }
    handleClick(e){
        e.preventDefault();
        //alert("Option created successfully")
        localStorage.setItem('assetName', this.state.asset);
        localStorage.setItem('address', this.state.address);
        localStorage.setItem('strikePrice', this.state.strikePrice);
        localStorage.setItem('time', this.state.time);
        localStorage.setItem('rate', this.state.rate);
    }
    handleClick2(e){
        e.preventDefault();
        this.setState({isRedirect: !this.state.isRedirect})
        //alert("hello")
    }

    // renderOption(){
    //     if(this.state.redirect){
    //         return <Option/>
    //     }
    // }
    renderOption(){
        return (
            <div>
                <Option />
            </div>
        )
    }
    render() {
      return (
          <div>
            <NavBar/>
            <Container fluid style={{ paddingLeft: 500, paddingRight: 300}}>
            <Form onSubmit={e => this.handleSubmit(e)}>
                <Row>
                    <Col md="auto">
                       <Form.Control as="select" value={this.state.value} onChange={this.handleChange}>
                          <option>Choose asset to get the market price</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Col>
                    <Col md="auto">
                        <Button variant="secondary" type="submit" value='Submit'>Get Price</Button>
                    </Col>
                </Row>
                </Form>
                </Container>
                <br></br>
                <div className="ml-5 ml-lg-0 mx-auto">
                <Container fluid style={{ height: 200, paddingLeft: 100, paddingRight: 200}}>
                    <Form onSubmit={e => this.handleClick(e)}>
                        <Row>
                            <Col md='auto'>
                            <Form.Control name='asset' value={this.state.asset} as="select" onChange={this.handleChange2}>
                                <option>Choose the Asset</option>
                                <option>assetOne</option>
                                <option>assetTwo</option>
                                <option>assetThree</option>
                                <option>assetFour</option>
                                <option>assetFive</option>
                            </Form.Control>
                            </Col>
                            <Col lg>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                <Button variant="outline-secondary">Address</Button>
                                </InputGroup.Prepend>
                                <Form.Control name= "address" value={this.state.address} aria-describedby="basic-addon1" placeholder="Enter your address here - i.e. 0x605050"  onChange={this.handleChange2}/>
                            </InputGroup>
                            </Col>
                            </Row>
                            <Row>
                                 <Col>
                                    <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                    <Button variant="outline-secondary">Strike Price</Button>
                                    </InputGroup.Prepend>
                                    <Form.Control name='strikePrice' value={this.state.strikePrice} aria-describedby="basic-addon1" placeholder="Enter your desired exercise price here" onChange={this.handleChange2}/>
                                    </InputGroup>
                                </Col>
                                <Col>
                                    <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                    <Button variant="outline-secondary">Time to Maturity</Button>
                                    </InputGroup.Prepend>
                                    <Form.Control name='time' value={this.state.time} aria-describedby="basic-addon1" placeholder="Enter time to maturity here" onChange={this.handleChange2}/>
                                    </InputGroup>
                                </Col>
                                <Col>
                                    <InputGroup className="mb-3">
                                    <InputGroup.Prepend>
                                    <Button variant="outline-secondary">Risk free Rate</Button>
                                    </InputGroup.Prepend>
                                    <Form.Control name='rate' value={this.state.rate} aria-describedby="basic-addon1" placeholder="Enter risk free rate here" onChange={this.handleChange2}/>
                                    </InputGroup>
                                </Col>
                        </Row>   
                        <Button variant="primary" type="submit" value='Submit'>Submit</Button>
                    </Form>
                    <br></br>
                    {/* <Button variant="info" onClick={this.handleClick2}>See created option</Button>{render} */}
                    </Container>
                    <div>
                    <Button fluid variant="info" onClick={this.handleClick2}>Create your Option Here</Button>{this.state.isRedirect ?  null : this.renderOption()}
                    </div>
                    </div>
        </div>
      )
  }
}
  export default FormSubmit;