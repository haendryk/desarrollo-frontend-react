import { SET_NAME_MODULE } from "./defaultTypres";

const initialState = {
    name: "",
    age: 0,
    message: "",
};

const defaultReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NAME_MODULE:{
            return {
                ...state,
                name: action.payload,
            };
        }
        default:
            return state;
            
    }
}
export default defaultReducer;