import React, {Component} from 'react';


const asyncComponent = (importComponent) => {
    class AsyncComponent extends Component {
        constructor(props){
            super();
            this.state = {
                component: null
            }
        }

        async componentDidMount(){
            const component = await importComponent() //confusing from here... //Update: Figured it out, we are calling the function
            //that handles the dynamic import.
            this.setState({component: component.default});
        }

        render(){
            const Component = this.state.component;
            return Component ? <Component {...this.props} /> : null
        }
    }

    return AsyncComponent;
}

export default asyncComponent;