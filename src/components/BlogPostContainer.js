import React, {Component} from 'react';
import BlogPostList from "./BlogPostList";
import {blogPostAdd, blogPostListFetch, blogPostListRequest} from "../actions/action";
import {connect} from "react-redux";
import {BASE_URL} from "../Constants";


class BlogPostContainer extends Component {
    componentDidMount() {
        setTimeout(this.props.blogPostAdd, 1000)
        this.props.blogPostListFetch()
    }

    render() {
        console.log(this.props.posts)
        return (
            <div>
                <BlogPostList posts={this.props.posts} isFetching={this.props.isFetching}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state.blogPostList
})

const mapDispatchToProps = {
    blogPostList: blogPostListRequest,
    blogPostAdd,
    blogPostListFetch
}

export default connect(mapStateToProps, mapDispatchToProps) (BlogPostContainer);