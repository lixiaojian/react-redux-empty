/**
 * Created by xiaojianli on 2017/1/11.
 */
import React,{PropTypes} from 'react';

function Counter({counter=1,increment,decrement,incrementIfOdd,incrementAsync}) {
    return (
        <p>
            Clicked: {counter} times
            {' '}
            <button onClick={increment}>+</button>
            {' '}
            <button onClick={decrement}>-</button>
            {' '}
            <button onClick={incrementIfOdd}>Increment if odd</button>
            {' '}
            <button onClick={() => incrementAsync()}>Increment async</button>
        </p>
    );
}

Counter.propTypes = {
    counter: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired
}

export default Counter;