import React from 'react';

import { connect } from 'react-redux'
import TagDisplay from "./TagDisplay"
import checkTags from "../Helpers/checkTags"
import Footer from './Footer'

const Projects = ({ projects }) => {
    const showProjects = projects.contents.reduce((tree, item)=>{
        if(!checkTags(item.tags, projects.tags)){return tree}
        
        return tree.concat([
        <div className="content-item" key={item.title}>
            <a href={item.link} target="_blank">
                <h3>{item.title}</h3>
                <img className="project-image" src={item.imglink} alt={item.title}/>
            </a>
            <p><a href={item.git}>git</a></p>
            <p className="tags">tags: {item.tags.join(', ')}</p>
        </div>
        ])
    }, [])
    
    return (
        <div className="content projects" >
         <TagDisplay tags={projects.tags} type="projects"/>
         <div className="display project-display">
         {showProjects}
         </div>
         <Footer />
        </div>
    )
}

function mapStateToProps(state) {
    const { projects } = state;
    return { projects }
}

export default connect(mapStateToProps)(Projects)