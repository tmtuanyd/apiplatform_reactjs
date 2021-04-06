import React, {Component} from 'react';
import BlogPostList from "./BlogPostList";

class BlogPostContainer extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.posts = [
            {
                title: 'Hello'
            }
        ]
    }

    render() {
        return (
            <div>
                <BlogPostList posts={this.posts}/>
            </div>
        );
    }
}

export default BlogPostContainer;