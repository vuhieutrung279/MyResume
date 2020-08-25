import React from 'react'
import BlogItem from './BlogItem';
import dbBlog from '../data/blog.json';

function Blog() {
    return (
        <div className="blog">
            <div className="blog__title">
                <h1>Blog</h1>
            </div>
            <div className="blog__list">
                <div className="container">
                    <div className="row">
                        {dbBlog.map((item, key) => (
                            <div className="col-sm-6 col-md-4">
                                <BlogItem id={item.id} title={item.title} shortDesc={item.shortDesc} imageBlog={item.imageBlog} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
