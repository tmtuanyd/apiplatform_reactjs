import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form'
import {renderField} from "../form";
import {connect} from "react-redux";
import {userLoginAttempt} from "../actions/action";
import {withRouter} from "react-router";
import {compose} from "redux";

class LoginForm extends Component {
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.token !== this.props.token){
            this.props.history.push('/')
        }
    }

    onSubmit = (values) => {
        this.props.userLoginAttempt(values.username, values.password)
    }
    render() {
        console.log(this.props)
        const { handleSubmit, error } = this.props
        console.log(error)
        return (
            <div>
                <form action="" onSubmit={handleSubmit(this.onSubmit)}>
                    <Field name={'username'} label={'Username'} type={'text'} component={renderField}/>
                    <Field name={'password'} label={'Password'} type={'password'} component={renderField}/>
                    <button type={'submit'}>Log in</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state.auth
})

const mapDispatchToProps = {
    userLoginAttempt
}

export default reduxForm({
    form: 'loginForm'
})(compose(connect(mapStateToProps, mapDispatchToProps), withRouter)(LoginForm));
