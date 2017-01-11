/**
 * Created by xiaojianli on 2017/1/11.
 */
export default function counter(state = 0,action) {
    switch (action.type){
        case 'INCREMENT':
            return state +1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}