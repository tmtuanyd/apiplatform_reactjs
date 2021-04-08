import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <nav>
                <Link to={"/"}>
                    React Blog
                </Link>
                <span>
                    <Link to={"/login"}>Sign-in</Link>
                </span>
            </nav>
        );
    }
}

export default Header;