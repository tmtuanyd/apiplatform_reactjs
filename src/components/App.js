import {Route, Switch} from "react-router-dom";
import LoginForm from "./LoginForm";
import React from "react";
import BlogPostContainer from "./BlogPostContainer";
import Header from "./Header";
import BlogDetail from "./BlogDetail";
import axios from "axios";
import {connect} from "react-redux";
import {userFetch} from "../actions/action";


class App extends React.Component{
    constructor(props) {
        super(props);
        const token = window.localStorage.getItem('jwtToken')
        console.log(token)
        if(token){
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        const {userId} = this.props.user
        console.log(this.props.user)
        console.log(userId)
        if(userId && prevProps.user && prevProps.user.userId !== userId && userId!==null){
            this.props.userFetch(userId)
            console.log('co vao day')
        }
    }

    render(){
        return (
            <div>
                <Header isAuthenticated={this.props.isAuthenticated}/>
                <Switch>
                    <Route path={"/login"} component={LoginForm} />
                    <Route path={"/"} component={BlogPostContainer} />
                    <Route path={"/blog-post/:id"} component={BlogDetail} />

                </Switch>
            </div>

        );
    }
}
const mapStateToProps = state => ({
    ...state.auth
})
const mapDispatchToProps = {
    userFetch
}


export default connect(mapStateToProps, mapDispatchToProps) (App);
