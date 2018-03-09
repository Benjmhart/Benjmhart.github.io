//imports projects from resumArrays plus a tags object which is derived from all the items in the array
import showAndTell from "../ResumArrays/Projects"
import { TOGGLE_TAG } from "../actions/"

export default function(state=showAndTell, action){
    const newState = {...state}
    switch(action.type){
        case TOGGLE_TAG:
            if(action.payload.type==="projects"){
                newState.tags[action.payload.tag] =!newState.tags[action.payload.tag]
            }
        return newState
        default:
            return newState
    }
}