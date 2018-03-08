//imports education from resumArrays plus a tags object which is derived from all the items in the array
import courses from "../ResumArrays/Education"
import getTags from "../Helpers/getTags"

export default function(state = courses, action, getTagsfunc = getTags){
    const newState = {...state}
    newState.tags = getTagsfunc(newState.contents)
    return newState
}