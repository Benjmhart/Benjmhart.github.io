import React from 'react';
import { connect } from 'react-redux'
import TagDisplay from "./TagDisplay"
import checkTags from "../Helpers/checkTags"
import Footer from './Footer'

const Education = ({education}) => {
    const showEducation = education.contents.reduce((tree, item)=>{
        if(!checkTags(item.tags, education.tags)){return tree}
        return tree.concat([
        <div className="content-item" key={item.title}>
            <div className="image-div">
                <img className="class-image" src={item.img} alt={item.title} />
            </div>
            <div className="class-text">
                <a href={item.website} target="_blank">
                    <h3>{item.title}</h3>
                    <h4>{item.location}</h4>
                </a>
                <p>Completion: {item.completion}</p>
                <p>tags: {item.tags.join(', ')}</p>
            </div>
        </div>
        ])
    }, [])
    
    return (
        <div className="content education" >
         <TagDisplay type="education"/>
         <div className="display education-display">
            {showEducation}
         </div>
         <Footer />
        </div>
    )
}

function mapStateToProps(state) {
    const { education } = state;
    return { education }
}

export default connect(mapStateToProps)(Education)