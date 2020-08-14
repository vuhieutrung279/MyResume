import React from 'react'

function Experience(props) {
    const { title, place, link, year, content } = props.exp;
    return (
        <div className="experience__item">
            <h5>{title} From <a href={link} target="_blank" rel="noopener noreferrer">{place}</a></h5>
            <p className="experience__year">{year}</p>
            <div className="experience__desc" dangerouslySetInnerHTML={{__html: content}}></div>
        </div>
        
    )
}

export default Experience
