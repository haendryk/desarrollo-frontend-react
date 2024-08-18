import { SET_NAME_MODULE } from "./productTypres";

const initialState = {
    name: "",
    age: 0,
    message: "",
};

const productReducer = (state = initialState, action) => {
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
export default productReducer;