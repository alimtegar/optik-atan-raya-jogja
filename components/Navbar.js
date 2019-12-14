import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white p-2 shadow-sm" id="navbar">
            <div className="container">
                <button className="navbar-toggler square mr-auto" type="button" data-toggle="collapse" data-target="#navbar-supported-content" aria-controls="navbar-supported-content" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa fa-bars" />
                </button>

                <a className="navbar-brand rufina h5 m-0 p-0" href="#">Optik Atan Raya Jogja</a>


                <div id="navbar-supported-content" className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
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

                {/* Order Button */}
                <div className="ml-auto ml-lg-3">
                    <button className="btn btn-primary shadow-sm d-none d-lg-block">
                        ORDER NOW
                    </button>

                    <button className="btn btn-primary square shadow-sm d-block d-lg-none">
                        <i className="fa fa-phone fa-lg" />
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;