import { Component } from "react";

const asyncComponent = (importComponent) => {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props)

      this.state = {
        component: null
      }

    }

    async componentDidMount(){
      const { default: component} = await importComponent()
      this.changeComponent(component)
    }

    changeComponent = (component) =>  this.setState({component})

    render(){
      const DynamicComponent = this.state.component

      return DynamicComponent ? <DynamicComponent {...this.props} /> : null
    }
  }

  return AsyncComponent
};

export default asyncComponent;
