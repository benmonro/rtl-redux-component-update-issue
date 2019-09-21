import React from 'react'
import { connect } from 'react-redux'
class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            foo: "bar"
        }
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log(nextProps.foo, this.props.foo);
        if (nextProps.foo !== this.props.foo) {
            this.setState({
                foo: nextProps.foo
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