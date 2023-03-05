import "./App.css";
import { Container, Row, Col, Button } from "reactstrap";
import React, { Component } from "react";
import Celcius from "./celcius";
import Kelvin from "./kelvin";
import Fahrenheit from "./fahrenheit";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      sıcaklık:1
    };
  }
  
  sıcaklıkArttır=()=>{
    this.setState({sıcaklık:this.state.sıcaklık + 1});
  }

  render() {
    
    return (
      <div>
        <Container>
          <h1>Hava Durumu</h1>
          <h4>Anlık sıcaklık:{this.state.sıcaklık} derece </h4>
          <div>
            <Button
              onClick={this.sıcaklıkArttır}
              color="primary"
            >
              sıcaklık artışı
            </Button>
          </div>
          <h6>3 birimde sıcaklık</h6>
          <Row>
            <Col>
              <Celcius info={this.state.sıcaklık} />
            </Col>
            <Col>
              <Kelvin info={this.state.sıcaklık} />
            </Col>
            <Col>
              <Fahrenheit info={this.state.sıcaklık} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
