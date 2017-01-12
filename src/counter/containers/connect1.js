/**
 * Created by xiaojianli on 2017/1/12.
 */
import Counter from '../components/Counter';
import {connect} from 'react-redux';
import * as ActionCreators from '../actions';

export default connect (
    state => ({counter:state.counter}),
    ActionCreators
)(Counter);