const Footer = () => {
    return (
        <footer id="footer" className="bg-primary text-white">
            <div className="container">
                <div className="footer-panel py-5">
                    <div className="row">

                        {/* Infomration */}
                        <div className="col-lg-3">
                            <div className="footer-information">
                                <h1 className="rufina h5 mb-4 pb-1">Optik Atan Raya Jogja</h1>

                                <div className="mb-3">
                                    <h2 className="small font-weight-bold mb-1"> <i className="fa fa-map-marker-alt mr-1"/> Address</h2>
                                    <p className="small mb-0">Jl. Tentara Rakyat Mataram 2<br />Bumijo<br />Jetis<br />Yogyakarta<br />Daerah Istimewa Yogyakarta 55231<br />Indonesia</p>
                                </div>

                                <div>
                                    <h2 className="small font-weight-bold mb-1"> <i className="fa fa-phone mr-1"/> Contact</h2>
                                    <p className="small mb-0">0877-7145-9754</p>
                                </div>
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="col-lg-3">
                            <div className="footer-nav">
                                <h1 className="h5 font-weight-bold mb-4">Navigation</h1>
                                <ul className="nav flex-column small">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">Men's Collections</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">Women's Collections</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">Accessories</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">Gallery</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Business Hours */}
                        <div className="col-lg-3">
                            <div className="footer-business-hours">
                                <h1 className="h5 font-weight-bold mb-4">Business Hours</h1>
                                <ul className="nav small">
                                    <li className="nav-item">
                                        <div className="d-table">
                                            <span className="d-table-cell font-weight-bold">Mon</span>
                                            <span className="d-table-cell">10.00 AM - 08.00 PM</span>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="d-table">
                                            <span className="d-table-cell font-weight-bold">Tue</span>
                                            <span className="d-table-cell">10.00 AM - 08.00 PM</span>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="d-table">
                                            <span className="d-table-cell font-weight-bold">Wed</span>
                                            <span className="d-table-cell">10.00 AM - 08.00 PM</span>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="d-table">
                                            <span className="d-table-cell font-weight-bold">Thu</span>
                                            <span className="d-table-cell">10.00 AM - 08.00 PM</span>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="d-table">
                                            <span className="d-table-cell font-weight-bold">Fri</span>
                                            <span className="d-table-cell">10.00 AM - 08.00 PM</span>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="d-table">
                                            <span className="d-table-cell font-weight-bold">Sat</span>
                                            <span className="d-table-cell">10.00 AM - 08.00 PM</span>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <div className="d-table">
                                            <span className="d-table-cell font-weight-bold">Sun</span>
                                            <span className="d-table-cell">Closed</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="col-lg-3">
                            <div className="footer-social-media">
                                <h1 className="h5 font-weight-bold mb-4">Follow Us</h1>
                                <ul className="nav m-min-1">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="fab fa-facebook-f fa-lg" />
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="fab fa-twitter fa-lg" />
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i className="fab fa-instagram fa-lg" />
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
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
            <div className="footer-copyright text-center p-3 border-top border-white-transparent">
                <p className="small mb-0">&copy; <a href="#">Optik Atan Raya Jogja</a> 2019 · Developed by <a href="#">Alterweb</a></p>
            </div>

        </footer>
    );
};

export default Footer;