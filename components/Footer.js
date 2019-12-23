import PropTypes from 'prop-types';
import { Link } from 'react-scroll';
import ContentLoader from 'react-content-loader'

/* Helpers */
import { range } from '../helpers';

const FooterNavItem = ({ title, link }) => (
    <li className="nav-item">
        <Link
            className="nav-link"
            to={link}
            smooth={true}
            duration={500}
            offset={-61}
        >
            {title}
        </Link>
    </li>
)

const FooterNavItemLoader = () => (
    <li className="nav-item">
        <span className="nav-link">
            <ContentLoader
                height={12}
                width={100}
                speed={2}
                primaryColor="#8b463d"
                secondaryColor="#8e4b42"
                style={{ height: 12 }}
            >
            </ContentLoader >
        </span>
    </li>
)

const FooterSocialMedia = ({ icon, title, link }) => (
    <li className="nav-item">
        <a href={link} target="_blank" rel="noopener" className={'nav-link ' + title.toLowerCase()}>
            <i className={'fab fa-lg fa-' + icon} />
        </a>
    </li>
)

const FooterSocialMediaLoader = ({ icon, title, link }) => (
    <li className="nav-item">
        <span className="nav-link">
            <ContentLoader
                height={45}
                width={45}
                speed={2}
                primaryColor="#8b463d"
                secondaryColor="#8e4b42"
                style={{ height: 45 }}
            >
            </ContentLoader >
        </span>
    </li>
)

const Footer = ({ company, nav, businessHours, socialMedias }) => {
    console.log(socialMedias);
    return (
        <footer id="footer" className="bg-primary text-white text-center text-lg-left">
            <div className="container">
                <div className="footer-panel py-5">
                    <div className="row">

                        {/* Infomration */}
                        <div className="col-lg-3">
                            <div className="footer-information mb-5 mb-lg-0">
                                <h1 className="rufina h5 mb-4 pb-1">
                                    {company.title ? company.title : (<ContentLoader
                                        height={26}
                                        width={216}
                                        speed={2}
                                        primaryColor="#8b463d"
                                        secondaryColor="#8e4b42"
                                        style={{ height: 26 }}
                                    />)}
                                </h1>

                                <div className="mb-3">
                                    <h2 className="small font-weight-bold mb-1"> <i className="fa fa-map-marker-alt mr-1" /> Address</h2>
                                    <p className="small mb-0">Jl. Tentara Rakyat Mataram 2<br />Bumijo<br />Jetis<br />Yogyakarta<br />Daerah Istimewa Yogyakarta 55231<br />Indonesia</p>
                                </div>

                                <div>
                                    <h2 className="small font-weight-bold mb-1"> <i className="fa fa-phone mr-1" /> Contact</h2>
                                    <p className="small mb-0">
                                        {company.phone ? company.phone : (<ContentLoader
                                            height={12}
                                            width={100}
                                            speed={2}
                                            primaryColor="#8b463d"
                                            secondaryColor="#8e4b42"
                                            style={{ height: 12 }}
                                        />)}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className="col-lg-3">
                            <div className="footer-nav mb-5 mb-lg-0">
                                <h1 className="h5 font-weight-bold mb-4">Navigation</h1>

                                <ul className="nav flex-column small">
                                    {nav.length ? nav.map((navItem) => (
                                        <FooterNavItem title={navItem.title} link={navItem.link} key={navItem.id} />
                                    )) : range(0, 5).map((key) => (
                                        <FooterNavItemLoader key={key} />
                                    ))}
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
                            <div className="footer-social-medias">
                                <h1 className="h5 font-weight-bold mb-4">Follow Us</h1>
                                <ul className="nav m-min-1 justify-content-center justify-content-lg-start">
                                    {socialMedias.length ? socialMedias.map((socialMedia) => (
                                        <FooterSocialMedia icon={socialMedia.icon} title={socialMedia.title} link={socialMedia.link} key={socialMedia.id} />
                                    )) : range(0, 3).map((key) => (
                                        <FooterSocialMediaLoader key={key} />
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="footer-copyright text-center py-3 px-2 border-top border-white-transparent">
                <p className="small mb-0">
                {company.title ? (
                    <span>&copy; <a href="#">Optik Atan Raya Jogja</a> 2019 · Developed by <a href="#">Alterweb</a></span>
                ) : (<ContentLoader
                    height={12}
                    width={400}
                    speed={2}
                    primaryColor="#8b463d"
                    secondaryColor="#8e4b42"
                    style={{ height: 12 }}
                />)}
                    
                </p>
            </div>

        </footer>
    );
};

Footer.propTypes = {
    company: PropTypes.object.isRequired,
    nav: PropTypes.array.isRequired,
    businessHours: PropTypes.array.isRequired,
    socialMedias: PropTypes.array.isRequired,
};

FooterNavItem.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

FooterSocialMedia.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default Footer;