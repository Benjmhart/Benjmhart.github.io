import React from 'react';

import { connect } from 'react-redux'
import TagDisplay from "./TagDisplay"
import checkTags from "../Helpers/checkTags"

const Projects = ({projects}) => {
    const showProjects = projects.contents.reduce((tree, item)=>{
        if(!checkTags(item.tags, projects.tags)){return tree}
        
        return tree.concat([
        <div className="content-item" key={item.title}>
            <a href={item.website} target="_blank">
                <h4>{item.title}</h4>
                <img src={item.imglink} width="320" height="192" alt={item.title}/>
            </a>
            <p>tags: {item.tags.join(', ')}</p>
        </div>
        ])
    }, [])
    
    return (
        <div className="content projects" >
         <TagDisplay tags={projects.tags} type="projects"/>
         <div className="project-display">
         {showProjects}
         </div>
        </div>
    )
}

function mapStateToProps(state) {
    const { projects } = state;
    return { projects }
}

export default connect(mapStateToProps)(Projects)