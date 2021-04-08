import React, {Component} from 'react';
import {Link} from "react-router-dom";

class BlogPostList extends Component {
    render() {
        const {posts, isFetching} = this.props
        if(isFetching){
            return <div><i className={"fas fa-spinner fa-spin"}/></div>
        }
        if(null === posts || posts.length === 0) {
            return <div>No log posts</div>
        }
        return (
            <div>
                {
                    posts && posts.map(post => <div className={"card mb-3 mt-3 shadow-sm"} key={post.id}>
                        <h3>
                            <Link to={`/blog-posts/${post.id}`}>{post.title}</Link>
                        </h3>
                        <p className={"card-text border-top"}>
                            <small className={"text-muted"}>
                                {post.published}
                            </small>
                        </p>
                    </div>)
                }
            </div>
        );
    }
}

export default BlogPostList;