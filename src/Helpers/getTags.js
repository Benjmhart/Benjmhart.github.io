const getTags = (y) => y.reduce((end, contentItem) => {
        contentItem.tags.forEach(x => end.includes(x) ? '': end.push(x))
        return end
    }, [])
    
export default getTags