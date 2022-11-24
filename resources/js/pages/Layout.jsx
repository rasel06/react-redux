import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/login">LOGIN</Link>
                    </li>
                    <li>
                        <Link to="/beftn">BEFTN</Link>
                    </li>
                    <li>
                        <Link to="/bach">BACH</Link>
                    </li>
                    <li>
                        <Link to="/rtgs">RTGS</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    );
};

export default Layout;
