/**
 * Created by xiaojianli on 2017/1/11.
 */
import React,{Component,PropTypes} from 'react';

class Counter extends Component{
    constructor (props){
        super(props);
        this.incrementIfOdd = this.incrementIfOdd.bind(this);
        this.incrementAsync = this.incrementAsync.bind(this);
    }
    incrementIfOdd() {
        if (this.props.value % 2 !== 0) {
            this.props.onIncrement();
        }
    }
    incrementAsync() {
        setTimeout(this.props.onIncrement, 1000);
    }

    render () {
        const {value, onIncrement, onDecrement} = this.props;
        return (
            <p>
                Clicked: {value} times
                {' '}
                <button onClick={onIncrement}> +</button>
                {' '}
                <button onClick={onDecrement}> -</button>
                {' '}
                <button onClick={this.incrementAsync}>Increment async</button>
                {''}
                <button onClick={this.incrementIfOdd}>Increment if odd</button>
            </p>
        );
    }
}
Counter.propTypes = {
    value : PropTypes.number.isRequired,
    onIncrement : PropTypes.func,
    onDecrement : PropTypes.func
}

export default Counter;