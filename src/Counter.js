import React from 'react'
import { connect } from 'react-redux'

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            foo: "bar"
        }
    }
    //neither of these lifecycle events are triggered.  What am I Missing?
    componentDidUpdate(prevProps) {
        console.log(prevProps.foo, this.props.foo);
        if (prevProps.foo !== this.props.foo) {
            this.setState({
                foo: this.props.foo
            })
        }
    }


    increment = () => {
        this.props.dispatch({ type: 'INCREMENT' })
    }

    decrement = () => {
        this.props.dispatch({ type: 'DECREMENT' })
    }

    render() {
        return (
            <div>
                <h2>Counter</h2>
                <span>{this.state.foo}</span>
                <div>
                    <button onClick={this.decrement}>-</button>
                    <span data-testid="count-value">{this.props.count}</span>
                    <button onClick={this.increment}>+</button>
                </div>
            </div>
        )
    }
}

export default connect(state => ({ count: state.count }))(Counter)