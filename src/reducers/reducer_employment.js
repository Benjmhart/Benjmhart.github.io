//imports employment from resumArrays, plus a tags object which is derived from all the items in the array
import roles from "../ResumArrays/Employment"
import { TOGGLE_TAG } from "../actions/"

export default function(state=roles, action){
    const newState = {...state}
    switch(action.type){
        case TOGGLE_TAG:
            if(action.payload.type==="employment"){
                newState.tags[action.payload.tag] =!newState.tags[action.payload.tag]
            }
        return newState
        default:
            return newState
    }
}