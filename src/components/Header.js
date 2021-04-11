import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Header extends Component {
    render() {
        const {isAuthenticated} = this.props
        return (
            <nav>
                <Link to={"/"}>
                    React Blog
                </Link>
                <span>
                    {isAuthenticated ? <span>Hello User!</span> : <Link to={"/login"}>Sign-in</Link> }
                </span>
            </nav>
        );
    }
}

export default Header;