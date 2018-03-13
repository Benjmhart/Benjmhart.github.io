const getTags = (y) => y.reduce((end, contentItem) => {
        contentItem.tags.forEach(x => end.hasOwnProperty(x) ? '': end[x] = false)
        return end
    }, {})
    
export default getTags