//imports employment from resumArrays, plus a tags object which is derived from all the items in the array
import roles from "../ResumArrays/Employment"
import getTags from "../Helpers/getTags"

export default function(state=roles, action, getTagsfunc = getTags){
    const newState = {...state}
    newState.tags = getTagsfunc(newState.contents)
    return newState
}