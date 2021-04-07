import React, {Component} from 'react';
import BlogPostList from "./BlogPostList";
import {blogPostAdd, blogPostList} from "../actions/action";
import {connect} from "react-redux";
import {BASE_URL} from "../Constants";
import axios from "axios";

class BlogPostContainer extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        setTimeout(this.props.blogPostAdd, 1000)
        this.props.blogPostList()
        axios.get(BASE_URL+'/api/blog_posts')
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }

    render() {
        console.log(BASE_URL)
        return (
            <div>
                <BlogPostList posts={this.props.posts}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state.blogPostList
})

const mapDispatchToProps = {
    blogPostList,
    blogPostAdd
}

export default connect(mapStateToProps, mapDispatchToProps) (BlogPostContainer);