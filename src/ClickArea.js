import React, { Component } from 'react';

export default class ClickArea extends Component {
  constructor(props) {
    super(props);
    
  }

  

  render() {
    const {startPointX, startPointY, width, height} = this.props;
    return (
      <div onClick={this.props.clickHandler} style={{position:'absolute', top:startPointY, left:startPointX, width:width, height:height, cursor:'pointer'}}>

      </div>
    );
  }
  
}