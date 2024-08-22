import { SET_FORM_DATA } from './formTypes';

export const saveFormData = (FormData) => {
    return {
        type: SET_FORM_DATA,
        payload: FormData,
    }
}