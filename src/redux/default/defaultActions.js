import { SET_NAME_MODULE } from "./defaultTypres";

export const setName = (nameModule) => {
    return {
        type: SET_NAME_MODULE,
        payload: nameModule,
    };
};