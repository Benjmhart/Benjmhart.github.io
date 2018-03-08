//imports projects from resumArrays plus a tags object which is derived from all the items in the array
import showAndTell from "../ResumArrays/Projects"
import getTags from "../Helpers/getTags"

export default function(state=showAndTell, action, getTagsfunc = getTags){
    const newState = {...state}
    newState.tags = getTagsfunc(newState.contents)
    return newState
}