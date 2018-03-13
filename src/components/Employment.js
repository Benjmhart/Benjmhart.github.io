import React from 'react';

import { connect } from 'react-redux'
import TagDisplay from "./TagDisplay"
import checkTags from "../Helpers/checkTags"
import Footer from './Footer'

const Employment = ({employment}) => {
    const showEmployment = employment.contents.reduce((tree, item, index)=>{
        if(!checkTags(item.tags, employment.tags)){return tree}
        const acheivementsList = item.acheivements.map(x=>{return <p key={x}>{x}</p>})
        return tree.concat([
        <div className="content-item" key={item.employer}>
            <div className="image-div">
                <img className={`employer-image image-${index}`} src={item.logo} alt={item.employer} />
            </div>
            <div className="employer-text">
            <a href={item.website} target="_blank">
                <h3>{item.employer}</h3>
            </a>
            <p>Date: {item.date}</p>
            {acheivementsList}
            <p>tags: {item.tags.join(', ')}</p>
            </div>
        </div>
        ])
    }, [])
    
    return (
        <div className="content employment" >
         <TagDisplay type="employment"/>
         <div className="display employment-display">
            {showEmployment}
         </div>
         <Footer />
        </div>
    )
}

function mapStateToProps(state) {
    const { employment } = state;
    return { employment }
}

export default connect(mapStateToProps)(Employment)