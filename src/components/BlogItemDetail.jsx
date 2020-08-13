import React from 'react'
import data from '../data/blog.json';
function BlogItemDetail(props) {
    return (
        <div>
            {data.map((item, key) => {
                if (item.id == props.match.params.id) {
                    return (
                        <div className="item">
                            <h1>{item.title}</h1>
                            <p>{item.content}</p>
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default BlogItemDetail