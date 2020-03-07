import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
    constructor(props){
        super(props)
    }
    state = {
        count: 0
    }
    add = () => {
        this.setState(current => ({count: current.count+1}))
    }
    minus = () => {
        this.setState(current => ({count: current.count-1}))
    }
    componentDidMount(){
        // render 이후에 실행된다.
    }
    componentDidUpdate(){
        // update 이후에 실행된다.
    }
    componentWillUnmount(){
        // unmount (comonent 가 죽기) 전에 실행된다.
    }
    render() {
        return (
            <div>
                <h1>The number is {this.state.count}</h1>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
            </div>
        )
    }
}

export default App;
