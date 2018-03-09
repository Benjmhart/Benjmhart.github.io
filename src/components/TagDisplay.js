import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import toggleTag from "../actions/action_toggleTag"

const TagDisplay = ({projects, employment, education, type, toggleTag}) => {
    const types = {projects, employment, education}
    const tags = types[type].tags
    const tagsArr = Object.keys(tags)
    const listTags = tagsArr.map(t => {
        const tagClass = tags[t] ? "tag tag-active" : "tag tag-inactive"
        return <span className={tagClass} key={t} onClick={()=>{toggleTag(t, type)}}>{t}</span>
    })
    return (
        <div className="tag-display" >
            {listTags}
        </div>
    )
}
function mapStateToProps({ projects, employment, education }){
    return { projects, employment, education}
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({ toggleTag }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TagDisplay)