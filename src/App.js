import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { NICE, SUPER_NICE } from './colors';
import ClickArea from './ClickArea';



export class App extends Component {
  constructor(props){
    super(props);
    this.state={next:null};
  }
  

  render() {
    return (

      <div>
      <div id='main' style={{position:'relative'}}>
        <img src={require("./img/1.png")} />
        <ClickArea startPointX={200} startPointY={700} width={200} height={500} clickHandler={() => this.clickHandler()}/>
      </div>
      <div ref='next'>
        {this.state.next ? <img src={this.state.next}/> : null}
      </div>
      </div>
    );
  }
  clickHandler(){
    this.setState({
      next: require('./img/2.png')
    })
  }
  
}