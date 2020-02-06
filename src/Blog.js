import React from 'react';
import { useParams, Link, useRouteMatch } from 'react-router-dom';
const blogPosts = [
    'first post',
    'second post',
    'third post',
    'fourth post'
]

function Blog() {
    const params = useParams();
    console.log(params.blogId);
    const match = useRouteMatch();
    console.table(match);

    return(
        <div>
            <ul>
                {blogPosts.map((p, i) => (
                    <li><Link to={`/blog/${i}`}>{p}</Link></li>
                ))}
            </ul>
            <p>
                {blogPosts[params.blogId]}
            </p>
        </div>
    );
}

export default Blog;