import { Link } from 'react-router-dom';
import {useSelector} from "react-redux";
import React from 'react';

const Navbar = () => {
    const form = useSelector((state) => state.form);
    let loginLink;
    if(form.formData.username)
        loginLink = (<li className="align-right"><a>{form.formData.username.trim() + ': ' + form.formData.email.trim()}</a></li>);
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/default">Default</Link>
                </li>
                <li>
                    <Link to="/products">Product</Link>
                </li>
                <li><Link to="/login">LoginForm</Link></li>
                {loginLink}
            </ul>
        </nav>
        
    );
};

export default Navbar;