//have an object with an array of tags,  need to check if that tag is true on a master tags object
//returns a bool

const checkTags = (tagsArr, tagsObj) => {
    return tagsArr.reduce((bool,tag) => {
        if (bool===true){return bool}
        if (tagsObj[tag]===true){return true}
        return false
    }, false)
}

export default checkTags