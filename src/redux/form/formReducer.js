import { SET_FORM_DATA } from './formTypes';

const initialState = {
    formData: {
        username:'',
        email:'',
        password:'',
    },
    //PASSWORD: 'h4mm31',
};

const formReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_FORM_DATA : {
            return {
                ...state,
                formData: {
                    ...state.formData,
                    ...action.payload,
                }
            }
        }
        case SET_FORM_DATA : {
            return {
                ...state,
                formData: {
                    ...state.formData,
                    ...action.payload,
                }
            }
        }
    default:
    return state;
    }
};

export default formReducer;