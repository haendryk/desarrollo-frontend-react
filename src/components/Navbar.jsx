import { Link } from 'react-router-dom';

const Navbar = () => {
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
                <li>
                    if()
                    <Link to="/login">LoginForm</Link>
                </li>
                <li>
                    OSMAR HAMMEL
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;