import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form'
import {renderField} from "../form";
import {connect} from "react-redux";
import {userLoginAttempt} from "../actions/action";

class LoginForm extends Component {
    onSubmit = (values) => {
        this.props.userLoginAttempt(values.username, values.password)
    }
    render() {
        console.log(this.props)
        const { handleSubmit } = this.props
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

const mapDispatchToProps = {
    userLoginAttempt
}

export default reduxForm({
    form: 'loginForm'
})(connect(null, mapDispatchToProps)(LoginForm));
