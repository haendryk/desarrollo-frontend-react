import { SET_NAME_MODULE } from "./defaultTypres";

export const setNameModule = (nameModule) => {
    return {
        type: SET_NAME_MODULE,
        payload: nameModule,
    }
}