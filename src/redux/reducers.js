import {combineReducers} from 'redux';
//reduccer
import defaultReducer from './default/defaultReducer';

const rootReducer = combineReducers({
    default: defaultReducer,
    
});

export default rootReducer;