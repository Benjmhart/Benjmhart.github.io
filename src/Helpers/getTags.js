const getTags = (y) => y.reduce((end, contentItem) => {
        contentItem.tags.forEach(x => end.hasOwnProperty(x) ? '': end[x] = true)
        return end
    }, {})
    
export default getTags