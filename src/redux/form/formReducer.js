import { SET_FORM_DATA } from './formTypes';

const initialState = {
    formData: {
        username:'',
        email:'',
        password:'',
    },
    authPassword:'h4mm31',
    //authPassword:'mod7ReactUSIP',
};

const formReducer = (state = initialState, action) => {

    switch (action.type) {
        
        case SET_FORM_DATA : {
            return {
                ...state,
                formData: {
                    ...state.formData,
                    ...action.payload,
                },
            };
        }
        // case SET_FORM_DATA : {
        //     return {
        //         ...state,
        //         formData: {
        //             ...state.formData,
        //             ...action.payload,
        //         }
        //     }
        // }
    default:
    return state;
    }
};

export default formReducer;