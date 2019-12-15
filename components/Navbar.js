import { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [isShow, setIsShow] = useState(false);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white p-2 shadow-sm" id="navbar">
            <div className="container">
                <button 
                    className="navbar-toggler square mr-auto rounded-0" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbar-supported-content" 
                    aria-controls="navbar-supported-content" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                    onClick={() => setIsShow(!isShow)}
                >
                    <i className="fa fa-bars" />
                </button>

                <a className="navbar-brand rufina h5 m-0 p-0" href="#">Optik Atan Raya Jogja</a>

                <a href="tel:+62-877-7145-9754" target="_blank" rel="noopener" className="btn btn-primary square ml-auto shadow-sm d-block d-lg-none">
                    <i className="fa fa-phone fa-lg" />
                </a>

                <div id="navbar-supported-content" className={`${isShow ? 'show' : ''} collapse navbar-collapse`}>
                    <ul className="navbar-nav mt-2 mt-lg-0 ml-auto">
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                className="nav-link"
                                to="slider"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-61}
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                className="nav-link"
                                to="mens-collections"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-61}
                            >
                                Men's
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                className="nav-link"
                                to="womens-collections"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-61}
                            >
                                Women's
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                className="nav-link"
                                to="kids-collections"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-61}
                            >
                                Kid's
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                className="nav-link"
                                to="accessories"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-61}
                            >
                                Accessories
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                className="nav-link"
                                to="gallery"
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-61}
                            >
                                Gallery
                            </Link>
                        </li>
                    </ul>
                </div>

                <a href="tel:+62-877-7145-9754" target="_blank" rel="noopener" className="btn btn-primary ml-3 shadow-sm d-none d-lg-block">
                    ORDER NOW
                </a>
            </div>
        </nav>
    );
}

export default Navbar;