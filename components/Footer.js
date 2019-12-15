import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <footer id="footer" className="bg-primary text-white text-center text-lg-left">
            <div className="container">
                <div className="footer-panel py-5">
                    <div className="row">

                        {/* Infomration */}
                        <div className="col-lg-3">
                            <div className="footer-information mb-5 mb-lg-0">
                                <h1 className="rufina h5 mb-4 pb-1">Optik Atan Raya Jogja</h1>

                                <div className="mb-3">
                                    <h2 className="small font-weight-bold mb-1"> <i className="fa fa-map-marker-alt mr-1" /> Address</h2>
                                    <p className="small mb-0">Jl. Tentara Rakyat Mataram 2<br />Bumijo<br />Jetis<br />Yogyakarta<br />Daerah Istimewa Yogyakarta 55231<br />Indonesia</p>
                                </div>

                                <div>
                                    <h2 className="small font-weight-bold mb-1"> <i className="fa fa-phone mr-1" /> Contact</h2>
                                    <p className="small mb-0">0877-7145-9754</p>
                                </div>
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="col-lg-3">
                            <div className="footer-nav mb-5 mb-lg-0">
                                <h1 className="h5 font-weight-bold mb-4">Navigation</h1>
                                <ul className="nav flex-column small">
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to="slider"
                                        smooth={true}
                                        duration={500}
                                        offset={-61}
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to="mens-collections"
                                        smooth={true}
                                        duration={500}
                                        offset={-61}
                                    >
                                        Men's
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to="womens-collections"
                                        smooth={true}
                                        duration={500}
                                        offset={-61}
                                    >
                                        Women's
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to="kids-collections"
                                        smooth={true}
                                        duration={500}
                                        offset={-61}
                                    >
                                        Kid's
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to="accessories"
                                        smooth={true}
                                        duration={500}
                                        offset={-61}
                                    >
                                        Accessories
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link"
                                        to="gallery"
                                        smooth={true}
                                        duration={500}
                                        offset={-61}
                                    >
                                        Gallery
                                    </Link>
                                </li>
                                </ul>
                            </div>
                        </div>

                        {/* Business Hours */}
                        <div className="col-lg-3">
                            <div className="footer-business-hours mb-5 mb-lg-0">
                                <h1 className="h5 font-weight-bold mb-4">Business Hours</h1>
                                <ul className="nav flex-column col-8 col-lg-9 mx-auto mx-lg-0 px-0 small text-left">
                                    <li className="nav-item">
                                        <div className="d-flex">
                                            <span className="font-weight-bold mr-auto">Mon</span>
                                            <span>10.00 AM - 08.00 PM</span>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="d-flex">
                                            <span className="font-weight-bold mr-auto">Tue</span>
                                            <span>10.00 AM - 08.00 PM</span>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="d-flex">
                                            <span className="font-weight-bold mr-auto">Wed</span>
                                            <span>10.00 AM - 08.00 PM</span>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="d-flex">
                                            <span className="font-weight-bold mr-auto">Thu</span>
                                            <span>10.00 AM - 08.00 PM</span>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="d-flex">
                                            <span className="font-weight-bold mr-auto">Fri</span>
                                            <span>10.00 AM - 08.00 PM</span>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="d-flex">
                                            <span className="font-weight-bold mr-auto">Sat</span>
                                            <span>10.00 AM - 08.00 PM</span>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="d-flex">
                                            <span className="font-weight-bold mr-auto">Sun</span>
                                            <span>Closed</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="col-lg-3">
                            <div className="footer-social-media">
                                <h1 className="h5 font-weight-bold mb-4">Follow Us</h1>
                                <ul className="nav m-min-1 justify-content-center justify-content-lg-start">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link facebook">
                                            <i className="fab fa-facebook-f fa-lg" />
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link twitter">
                                            <i className="fab fa-twitter fa-lg" />
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link instagram">
                                            <i className="fab fa-instagram fa-lg" />
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link whatsapp">
                                            <i className="fab fa-whatsapp fa-lg" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="footer-copyright text-center py-3 px-2 border-top border-white-transparent">
                <p className="small mb-0">&copy; <a href="#">Optik Atan Raya Jogja</a> 2019 · Developed by <a href="#">Alterweb</a></p>
            </div>

        </footer>
    );
};

export default Footer;