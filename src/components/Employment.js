import React from 'react';

import { connect } from 'react-redux'
import TagDisplay from "./TagDisplay"
import checkTags from "../Helpers/checkTags"

const Employment = ({employment}) => {
    const showEmployment = employment.contents.reduce((tree, item)=>{
        if(!checkTags(item.tags, employment.tags)){return tree}
        const acheivementsList = item.acheivements.map(x=>{return <p key={x}>{x}</p>})
        return tree.concat([
        <div className="content-item" key={item.employer}>
            <a href={item.website} target="_blank">
                <h4>{item.employer}</h4>
            </a>
            <p>Date: {item.date}</p>
            {acheivementsList}
            <p>tags: {item.tags.join(', ')}</p>
        </div>
        ])
    }, [])
    
    return (
        <div className="content employment" >
         <TagDisplay tags={employment.tags} type="employment"/>
         <div className="employment-display">
         {showEmployment}
         </div>
        </div>
    )
}

function mapStateToProps(state) {
    const { employment } = state;
    return { employment }
}

export default connect(mapStateToProps)(Employment)