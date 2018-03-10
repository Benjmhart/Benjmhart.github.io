//imports education from resumArrays plus a tags object which is derived from all the items in the array
import courses from "../ResumArrays/Education"
import { TOGGLE_TAG } from "../actions/"

export default function(state = courses, action){
    const newState = {...state}
    switch(action.type){
        case TOGGLE_TAG:
            if(action.payload.type==="education"){
                newState.tags[action.payload.tag] =!newState.tags[action.payload.tag]
            }
        return newState
        default:
            return newState
    }
}