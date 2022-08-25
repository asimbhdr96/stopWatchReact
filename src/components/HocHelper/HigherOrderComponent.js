import React from "react";



const HigherOrderComponent = (BaseComponent) => {


  class GeneratedComponent extends React.Component {

    constructor(props) {
      super(props)

      this.state = {
         count : 0,
      }
    }

    handleIncrement = ()=> {
      this.setState({count: this.state.count +1})
    }
    handleDecrement = ()=> {
      this.setState({count: this.state.count -1})
    }
    render() {
      return <BaseComponent count={this.state.count} handleInc={this.handleIncrement} handleDec={this.handleDecrement}/>;
    }
  }


  return GeneratedComponent;
};

export default HigherOrderComponent;

