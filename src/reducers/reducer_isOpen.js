import { SET_OPEN } from "../actions/"
const initialObject = {
    projects:false,
    employment:false,
    education: false
}

export default function(state = initialObject, action){
    if(action.type === SET_OPEN){
        const newState = {...initialObject}
        newState[action.payload] = true
        return newState
    }
        return state
    
}