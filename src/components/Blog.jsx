import React from 'react'
import BlogItem from './BlogItem';
import dbBlog from '../data/blog.json';
function Blog() {
    return (
        <div className="blog">
            <div className="container">
                <div className="row">
                    {dbBlog.map((item, key) => (
                        <div className="col-md-3">
                            <BlogItem id={item.id} title={item.title} content={item.content} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Blog
