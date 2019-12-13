import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm" id="navbar">
            <div className="container">
                <a className="navbar-brand rufina h5 m-0 p-0" href="#">Optik Atan Raya Jogja</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-supported-content" aria-controls="navbar-supported-content" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

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

                <div className="ml-3">
                    <button className="btn btn-primary shadow-sm">
                        ORDER NOW
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;