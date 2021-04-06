import React, {Component} from 'react';

class BlogPostList extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {posts} = this.props
        return (
            <div>
                <ul>
                    {
                        posts && posts.map(post => <li>{post.title}</li>)
                    }
                </ul>
            </div>
        );
    }
}

export default BlogPostList;