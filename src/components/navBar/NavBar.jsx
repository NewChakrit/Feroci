import './NavBar.css';
import { Link, Outlet } from 'react-router-dom';
import Logo from '../logo/Logo';
import Footer from '../footer/Footer';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

function NavBar() {
    const { logout } = useContext(AuthContext);
    return (
        <>
            <Logo />
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="">
                                    <a
                                        className="nav-link active"
                                        aria-current="page"
                                        href="#"
                                    >
                                        <strong>HOME</strong>
                                    </a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="aboutus">
                                    <a className="nav-link" href="#">
                                        <strong>ABOUT US</strong>
                                    </a>
                                </Link>
                            </li>

                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <strong>ACHIEVE</strong>
                                </a>
                                <ul
                                    className="dropdown-menu"
                                    aria-labelledby="navbarDropdown"
                                >
                                    <li>
                                        <Link to="performance">
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                <strong>
                                                    HISTORIC PERFORMANCES
                                                </strong>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="member">
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                <strong>MUSICIANS</strong>
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    <strong>JOIN US</strong>
                                </a>
                                <ul
                                    className="dropdown-menu"
                                    aria-labelledby="navbarDropdown"
                                >
                                    <li>
                                        <Link to="audition">
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                <strong>AUDITION</strong>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="supportus">
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                <strong>SUPPORT US</strong>
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" onSubmit={() => logout()}>
                            <button
                                className="btn btn-outline-success"
                                type="submit"
                            >
                                <i className="bi bi-box-arrow-right">
                                    {' '}
                                    Sign out
                                </i>
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
            <Outlet />
            <Footer />
        </>
    );
}

export default NavBar;
