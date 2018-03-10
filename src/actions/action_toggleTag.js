import { TOGGLE_TAG } from "./"

const toggleTag = (tag, type) => {
    const action = {
        type: TOGGLE_TAG,
        payload:{
            type,
            tag
        }
    }
    return action
}

export default toggleTag